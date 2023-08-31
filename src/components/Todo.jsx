import React, { useState } from 'react'
import { useStateValue } from '../state/stateProvider';
import { EditTodo, UpdateTodo, deleteTodo, getTodos } from '../firebase/firebaseOpr';

const Todo = ({ todo }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const { todos, setTodos } = useStateValue();
    const [text, setText] = useState(todo.value)

    const GetTodos=async()=>{
        const data = await getTodos();
      setTodos(data)
    }


    const handleDone = (todo) => {
         UpdateTodo(todo);
         GetTodos();
        // const updatedTodos = todos.map((todo) => {
        //     const td = todo.id === id ? { ...todo, done: !todo.done } : todo;
        //     //  --- OR --- 
        //     // if(todo.id===id){
        //     //   return {...todo,done:!todo.done}
        //     // }else{
        //     //   return todo;
        //     // }
        //     return td;
        // })
        // setTodos(updatedTodos)

    }

    const handleDelete = (id) => {
        console.log(id)
        
        deleteTodo(id)

        // get all todos and update state after deletion 
        GetTodos();


        // const updatedTodos = todos.filter((todo) => {
        //     const td = todo.id !== id ? todo : null
        //     return td;
        //     //  --- OR ---
        //     // if(todo.id === id){
        //     //   return null
        //     // }else{
        //     //   return todo
        //     // }
        // })
        // setTodos(updatedTodos)
    }


    const updateText=(id,text)=>{
        EditTodo(id,text)
        GetTodos();


        // const updatedTodos = todos.map((todo) => {
        //     // const td = todo.id === id ? { ...todo, done: !todo.done } : todo;
        //     // return td 
        //     //  --- OR --- 
        //     if (todo.id === id) {
        //         return { ...todo, value: text }
        //     } else {
        //         return todo;
        //     }    
        // })
        // setTodos(updatedTodos);

        setOpenEdit(!openEdit)
    }

    const handleSubmit = (e, id,text) => {
        e.preventDefault();
        updateText(id,text);      
    }
    return (
        <>
            <li className='relative p-2 pr-5 bg-purple-600 text-white rounded-md flex items-center justify-between' >
                <div>

                    <p style={{ display: openEdit ? 'none' : '' }} className={`absolute top-[13px] left-3 text-xl`}>{todo.value}</p>
                    <form onSubmit={(e) => handleSubmit(e, todo.id,text)} className={`${openEdit ? '' : 'hidden'}`}>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={`absolute top-[13px] left-3 text-xl bg-transparent  w-1/2 outline-none border-b-2 border-solid border-b-gray-200`} />
                    </form>

                </div>
                <p >
                    <button onClick={() => handleDone(todo)} className={`bg-green-200 text-black px-2 py-1 mr-2 rounded-md ${todo.done ? 'line-through' : ''} `}>Done</button>
                    {
                        openEdit ? (
                            <button onClick={() =>(updateText(todo.id,text))} className='px-2 py-1 mr-2 w-14 rounded-md text-black  bg-green-500'>OK</button>
                        ) : (
                            <button onClick={() => setOpenEdit(!openEdit)} className='px-2 py-1 mr-2 w-14 rounded-md text-black  bg-pink-300'>Edit</button>
                        )
                    }
                    <button onClick={() => handleDelete(todo.id)} className='bg-red-700 px-2 py-1 mr-2 rounded-md'>Delete</button>
                </p>
            </li>
        </>
    )
}

export default Todo



// AiFillDelete
// MdOutlineDeleteOutline
// TiEdit
// MdEdit
// FiEdit


// MdOutlineFileDownloadDone
// IoCheckmarkDoneSharp
// MdRemoveDone
// MdOutlineRemoveDone
// MdDone
// MdOutlineDownloadDone