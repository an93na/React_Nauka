import React from "react";



export const EditModal = (props) => {
    const {todoToEdit, setTodoToEdit, setTodos} = props
    return <dialog open>
    <article>
      <h2>Edit todo</h2>
      <form action="" onSubmit={(e)=> {
        e.preventDefault()
        setTodos((prevState)=>prevState.map((todo)=>{
            if(todo.id === todoToEdit.id){
                return todoToEdit
            }
            return todo
        }))
        setTodoToEdit(null)
      }}>
        <label htmlFor="title">Title</label>
        <input value={todoToEdit.title} type="text" name="" id="title" onChange={(event)=> setTodoToEdit((prevState)=>({...prevState, title: event.target.value}))}/>
        <label htmlFor="priority">Priority</label>
        <select value={todoToEdit.priority} name="" id="priority" onChange={(event)=> setTodoToEdit((prevState)=>({...prevState, priority: event.target.value}))}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <label htmlFor="status">Status</label>
        <input checked={todoToEdit.status} type="checkbox" name="" id="status" onChange={(event)=> setTodoToEdit((prevState)=>({...prevState, status: event.target.value}))}/>
        <div style={{display: 'flex', gap:20, marginTop: 50}}>
            <button>Submit</button>
            <button onClick={()=> setTodoToEdit(null)}>Cancel</button>
        </div>
      </form>
    </article>
  </dialog>
}