import React from "react";
const deletetodo= async ()=>{
    const token= localStorage.getItem('token')
    const response = await fetch("http://localhost:5000/todos", {
                    method:"POST",
                    headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
                    
            });
}