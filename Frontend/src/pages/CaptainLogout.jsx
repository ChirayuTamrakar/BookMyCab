import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function CaptainLogout() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if(!token){
        console.log("TokenNotFound@ CaptainLogout.jsx");
        return;
    }
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            console.log("Captain logged out successfully");
            localStorage.removeItem('token');
            setTimeout(() => {
                navigate('/captain-login');
            }, 5000);
        } else{
            console.log("Caution:responseError:UserLogout")
        }
    }).catch((error)=>{
        console.log("ha meri jaan -----Error in CaptainLogout:", error.response?.data || error.message);
    })

  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout