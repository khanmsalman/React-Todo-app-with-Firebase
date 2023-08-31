import { useState } from "react"
import Header from "./Header"
import InputContainer from "./InputContainer"
import TodoList from './TodoList'

function Wrapper() {
  const [value, setValue] = useState('')
   
  return (
    <div className="min-h-screen w-[55%] mx-auto">
      <Header />
      <InputContainer value={value} setValue={setValue} />
      <TodoList/>
    </div>
  )
}

export default Wrapper