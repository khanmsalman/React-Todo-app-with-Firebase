import { useEffect } from "react"
import Wrapper from "./components/Wrapper"
import { getTodos } from "./firebase/firebaseOpr"
import { useStateValue } from "./state/stateProvider"

function App() {
  const {todos, setTodos} = useStateValue()

  useEffect(()=>{
    const getAllTodos=async()=>{
      const data = await getTodos();
      setTodos(data)
        }
    getAllTodos();
  },[])


  return (
    <div >
      <Wrapper/>
    </div>         
  )
}
 
export default App
  