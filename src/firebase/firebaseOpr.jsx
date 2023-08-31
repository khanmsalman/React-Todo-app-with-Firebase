import {collection, deleteDoc, doc, getDocs, setDoc, updateDoc} from 'firebase/firestore'
import {firestore} from '../firebase.config'

export const saveTodo=async(todo)=>{
    await setDoc( doc(firestore, "Todos", `${Date.now()}`), todo, {merge: true} );
}

export const getTodos=async()=>{
    const TodosRef = collection(firestore,'Todos');
    const data = await getDocs(TodosRef);
    return data.docs.map((doc)=>({...doc.data(),id:doc.id}));

    // Just for Practice
    // let getData = data.docs.map((doc)=>({
    //     // console.log(doc.id," => ",doc.data())
    //     ...doc.data(),id:doc.id
    // }))
    // console.log(getData)
}


export const deleteTodo=async(id)=>{
     await deleteDoc(doc(firestore,"Todos",id));
}


export const EditTodo=async(id,value)=>{
    await updateDoc(doc(firestore,"Todos",id), {value:value})
}

export const UpdateTodo=async(todo)=>{
    await updateDoc(doc(firestore,"Todos",todo.id),{done:!todo.done})

}
 







// const data = await getAllFoodItems();
// const mydata = data.docs.map((doc)=>({...doc.data(),id:doc.id}))

//Get all food items
    // const items = await getDocs( 
    //   query(collection(firestore, 'foodItems'),orderBy("id"))
    //  );
    // return items.docs.map(doc=>doc.data)


// export const getAllFoodItems = () =>{
//     const foodRef = collection(firestore,'foodItems')
//     return getDocs(foodRef)
//   }