import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function UserLogout() {
    

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(()=>{
      if(!token){
        console.log("Token Missing @UserLogin")    
      }

      axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
              Authorization: `Bearer ${token}`  
          }
      })
      .then((response) => {
            if(response.status === 200){
              localStorage.removeItem('token');
              navigate('/login');
            } else{
              console.log("Caution:responseError:UserLogout")
            }
      })
    }, [token, navigate])



  return (
    <div>UserLogout</div>
  )
}

export default UserLogout