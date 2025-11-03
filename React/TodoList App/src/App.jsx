import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'



function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"));
    
    setTodos(todos);
    }

  }, [])

  
  // ✅ Save todos to localStorage whenever they change
useEffect(() => {
  if (todos.length > 0) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}, [todos]);


  

  // const saveToLS = (params) => {
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // }
  
  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }
  

  const handleEdit = (e,id)=>{
    let t = todos.filter(i=>i.id===id);
    setTodo(t[0].todo);
        let newTodos = todos.filter(item=>{
      return item.id!==id;
    })
    setTodos(newTodos);
    //saveToLS();

  }
  const handleDelete = (e,id)=>{
    //let id = e.target.name;
    // console.log(`The id is ${id}`);
    //     let index = todos.findIndex(item=>{
    //   return item.id === id;
    // })
      const confirmed = window.confirm("Are you sure you want to delete this todo?");
  if (!confirmed) return;
    let newTodos = todos.filter(item=>{
      return item.id!==id;
    })
    setTodos(newTodos);
    //saveToLS();
    
  }
  const handleAdd = ()=>{
    setTodos([...todos,{id:uuidv4() , todo,isCompleted: false}])
    setTodo("")
    //saveToLS();
    
  }
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }
  
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    //saveToLS();
  }
  


  return (
    <>
  <Navbar/>
    <div className="mx-3 md:container md:mx-auto bg-violet-50 rounded-xl p-5 my-5 min-h-[80vh] md:w-1/2">
            <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>

      <div className="addTodo my-5 flex flex-col gap-4">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-lg px-5 py-1' />
        <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 p-2 py-1 text-white rounded-md
        text-sm font-bold'>Save</button>
      </div>
      <input className='my-4' onClick={toggleFinished} type="checkbox" checked={showFinished}  /> <span>Show All</span>


        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length===0&& <div className='m-5'> Nothing to show</div> }
          {todos.map(item=>{

   
          return (showFinished|| !item.isCompleted)&& <div key={item.id} className="todo flex  justify-between my-3">
            <div className='flex gap-5'>
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md
        mx-1 text-sm font-bold'><FaEdit /></button>
              <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md
        mx-1 text-sm font-bold'><MdDelete /></button>
            </div>

          </div>
          })}
        </div>

    </div>

    </>
  )
}

export default App
