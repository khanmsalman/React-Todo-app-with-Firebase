import React, { useState } from 'react'
import { useStateValue } from '../state/stateProvider'
import Todo from './Todo'

const TodoList = () => { 
  const { todos, setTodos } = useStateValue();

  return (
    <div className='px-7 py-5 min-h-[400px]'>
      <ul className='text-xl flex flex-col gap-3 justify-between'>
        {
          todos.length>0 ? todos.map((todo) => (
            <Todo todo={todo} />
          ))
          : (
            <div className="flex items-center justify-center py-10">
              <h1 className='text-5xl text-slate-400'>Nothing is here...</h1>
            </div>
          )
        }
      </ul>
    </div>
  )
}


export default TodoList 