import React, { useEffect, useState } from "react";



export const ListZ = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        console.log('komponent się zamontował');
        
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      return () => {
        console.log('komponent się odmontował')
      }
    }, [])
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo) => {
                        return <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? 'Yes' : 'No'}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}