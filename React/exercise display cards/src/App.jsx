import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>setposts(data))
    .catch((error)=>console.log("Error fethcing data:",error));
  
  }, [])
  

  return (
    <>
        <div className="container">
      <h1>Posts from API</h1>

      <div className="card-container">
        {posts.map((post)=>(
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    </div>
   
    </>
  )
}

export default App
