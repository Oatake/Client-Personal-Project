import React from 'react'
import useUserStore from '../../../Stores/user-store'
import { useNavigate } from 'react-router-dom';

function MainLogo() {
  const setToken = useUserStore(state=>state.setToken)
  const setRole = useUserStore(state=>state.setRole)
  const setUser = useUserStore(state=>state.setUser)
  const navigate = useNavigate();
  const logOut=()=>{
    setToken("")
    setRole({})
    setUser("")
    navigate("/")
  }
  return (
    
    <div className='btn text-4xl font-Inter font-extrabold hover:drop-shadow-xl' onClick={logOut}>LOGO</div>
  )
}

export default MainLogo