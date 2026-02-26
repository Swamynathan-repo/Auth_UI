"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/sessions";


 
const API_URL= "http://localhost:3001";
console.log(API_URL);
export const loginAction = async(formData : FormData) =>{
    console.log("formdata:",formData);
    try {
        const response= await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);
         const user:UserType= response.data[0];
         if(!user) throw new Error("Invalid cred");
        //  set user cookies
        await setSession({name:user.name, email:user.email, id:user.id});
    } catch (error) {
        console.log("Falied to Login",error);
        redirect("/login");
    }
        redirect("/contact");
};

export const logoutAction= async()=>{
    await deleteSession();
    redirect("/login");    
};