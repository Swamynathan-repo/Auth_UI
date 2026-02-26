"use client"
import React from 'react';
import { logoutAction } from '../actions/auth';
import { useRouter } from 'next/navigation';


const LogoutBtn = () => {
  const router= useRouter();
   const handleLogout= async()=>{
    try {
        await logoutAction();
      // client side redirect is fallback
      // redirect("/login");
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.log("Logout failed due to :", error);
    }
    }
  return (
     <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer'
      onClick={handleLogout}>Logout</button>

  )
};

export default LogoutBtn;