import React, {useState} from "react";
const InputTodo = ()=>{
    const [description, setDescription]= useState("");
    const onSubmitform= async e =>{
        e.preventDefault();
        try{
                const body = {description}
                const response = await fetch("http://localhost:5000/todos", {
                    method:"POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
            });
                // console.log(await response.json());
                window.location='/'
                



        }catch(err){
            console.error(err.message)
        }
    };
    return(
        <div>
            <h1 className="text-center mt-5">hello</h1>
            <form className="d-flex m-5" onSubmit={onSubmitform}>
                <input type="text" className="form-control" value={description} onChange={e=> setDescription(e.target.value)}/>
                <button className="btn btn-success">add</button>
            </form>

        </div>
        
    )
}
export default InputTodo;