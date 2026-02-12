"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";


 
const API_URL= "http://localhost:3001 ";

export const loginAction = async(formData : FormData) =>{
    console.log("formdata:",formData);
    try {
        const response= await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);
         const user:UserType= response.data[0];
         if(!user) throw new Error("Invalid cred");
        //  set user cookies

    } catch (error) {
        console.log("Falied to Login",error);
    }
        redirect("/contact");
};

export const logout= async()=>{
    redirect('/logout');    
}