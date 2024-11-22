import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";
import useLayoutStore from "./layout-store";

const useUserStore = create(persist((set,get) => ({
  token : "",
  userName : "",
  role : {},
  setToken : (inputToken) => set({token : inputToken}),
  setUser : (inputUser) => set({UserName : inputUser}),
  setRole : (inputRole) => set({role : inputRole}),
  funcLogin : async (body)=>
    {
      const resp = await axios.post("http://localhost:8000/auth/login/",body)
      const inputToken = resp.data.token
      console.log(inputToken)
      const getme = await axios.get("http://localhost:8000/auth/getme/",{
        headers:{Authorization: `Bearer ${inputToken}`}
    })
      console.log(getme)
      const inputRole = { isAdmin : getme.data.userRole.isAdmin, 
                          isButler : getme.data.userRole.isButler,
                          isKitchenHand : getme.data.userRole.isKitchenHand,
                          isReception : getme.data.userRole.isReception
                        }
      const userName = getme.data.userName
      console.log("name is",userName)
      set({token : inputToken, role : inputRole, userName:userName })

      
    }
  
}),{
    name : 'users-store',
    storage : createJSONStorage(()=>localStorage)  // able to keep is session storage instead of local storage
}));

export default useUserStore;