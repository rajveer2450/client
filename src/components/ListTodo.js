import React, {useEffect, useState}from "react";
const ListTodo = ()=>{

    const [Todos,setTodos]= useState([])
    const gettodos= async ()=>{
        
        const data = await fetch("http://localhost:5000/todos")
        const mainData = await data.json()

        setTodos(mainData);




    }

    useEffect(()=>{
        gettodos();
        
        

    },[])
    // console.log(Todos)



    return(
        <>
        <table className="table m-5" >
            <thead>
            <tr>
                <th>description</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            {Todos.map(todo => {
                return(
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>edit</td>
                        <td><button className="btn btn-danger">delete</button></td>
                    </tr>
                )
            })}
            {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}
            
            </tbody>
        </table>
        
        </>
        // <h1>no</h1>
    )
}
export default ListTodo;