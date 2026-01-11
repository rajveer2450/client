import React, {useEffect, useState}from "react";
const ListTodo = ()=>{

    const [todos,setTodos]= useState([])
    const gettodos= async ()=>{
        try{
            const token = localStorage.getItem('token');
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const data = await fetch(API_URL + "/todos", {headers: { 'Authorization': `Bearer ${token}` }});
            if (data.status === 401 || data.status === 403) {
                localStorage.removeItem('token');
                window.location = '/';
                return;
            }
            const mainData = await data.json();
            if (Array.isArray(mainData)){
                setTodos(mainData);
            }
            else{
                console.error("invalid")
            }
        }catch(err){
            console.error(err);
        }




    }

    useEffect(()=>{
        gettodos();
        
        

    },[])
    // console.log(Todos)

    const deleteTodo = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/todos/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            window.location='/'
            
            // setTodos(prev => prev.filter(t => t.todo_id !== id));
        } catch (err) {
            console.error(err);
            alert('error while deleting');
        }
    }



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
            {todos.map(todo => {
                return(
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>edit</td>
                        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>delete</button></td>
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