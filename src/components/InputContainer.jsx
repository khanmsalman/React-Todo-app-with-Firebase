import React, { useEffect, useState } from 'react'
import { useStateValue } from '../state/stateProvider'
import { getTodos, saveTodo } from '../firebase/firebaseOpr';

function InputContainer() {
  const {todos,setTodos} = useStateValue();
  const [value , setValue] = useState('');
  const [loading,setLoading] = useState(false);

  const uploadTodo=async()=>{
    setLoading(true);
    try {
      if(value){
        const data={
          value,
          done:false,
        }
        saveTodo(data);
        setLoading(false);
        setValue('');

        const getAllTodos=async()=>{
          const allTodos = await getTodos();
          setTodos(allTodos)
            }
        getAllTodos();

      }else{
        alert('Value Field is Required')
        setLoading(false);
      }     
    } catch (error) {
      console.log("Error while upload todo")
      console.log(error)
    }
  }


  return (
    <>
    <div className='p-3 my-8 flex items-center justify-around w-full '>
      <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} className='border-b-2 pb-1 border-b-purple-300 outline-none bg-transparent focus:border-b-2 focus:border-solid focus:border-purple-700 w-[70%] text-xl placeholder:text-gray-500' placeholder='Add a Todo ... ' />
      <button onClick={()=>{uploadTodo()}} className='p-2 text-white w-24 -mt-1 bg-purple-500 rounded-md -mr-2'>{loading?'o':'ADD'}</button>
    </div> 
    {/* <hr className='w-[90%] mx-auto mb-3' /> */}
    </>
  )
}

export default InputContainer 