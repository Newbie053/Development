import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title:"Hey",
      desc:"I am first todo"
    },
        {
      title:"Hey 2",
      desc:"I am first todo 2"
    },
        {
      title:"Hey 3",
      desc:"I am first todo 3"
    },
        {
      title:"Hey 4",
      desc:"I am first todo 4"
    },
  ])

  const Todo = ({todo}) => {
    return (<>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>show button true</button> : <button>show button false</button>}

      {/* {showbtn && <button>I will shown on another button clicked</button>} */}

      {todos.map(item=>{
        return <Todo key={item.title} todo={item}/>
      })}
  


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
