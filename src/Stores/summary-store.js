import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useSummaryStore = create((set, get) => ({
  table: "",
  orderId : undefined,
  setTable: (data) => set({ table: data }),
  menuList : [],
  totalCost: 0,
  setSummary: async () => {
    try {
      const table = get().table
      console.log(`http://localhost:8000/order/summary/${table}`)
      const resp = await axios.get(
        `http://localhost:8000/order/summary/${table}`
      );
      console.log(resp)
      set({menuList : resp.data.orderList})
      set({totalCost: resp.data.order.totalPrice });
      set({orderId : resp.data.order.id})
    } catch (error) {
      console.log(error);
    }
  },
  resetStore : ()=>{
    set({table:""})
    set({orderId:undefined})
    set({menuList:[]})
    set({totalCost: 0})
  }

  
}));

export default useSummaryStore;
