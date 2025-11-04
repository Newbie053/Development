import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
//import { resolveConfig } from 'vite'


function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,

    formState: { errors , isSubmitting},
  } = useForm()

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }

    const onSubmit = async(data) => {
      //await delay(1)  //simulating network delay

      let r = await fetch("http://localhost:3000/",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      let res = await r.text()
      console.log(data,res)



      // if(data.username!=="Dipto"){
      //   setError("myform",{message:"Not in good order because username is invalid"})
      // }
      //  if(data.username==="rohan"){
      //           setError("blocked",{message:"User s blocked"})

      // }
    }

  

  return (
    <>
    {isSubmitting&& <div>Loading...</div>}
    <div className="container">
         <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Username' {...register("username",{ required: {value:true,message:"Requred field"},
        minLength:{value:3,message:"Minlength is 3"}
          ,maxLength:{value:10,message:"Maxlength is 10"} })}  type="text"  />
          <br />
              {errors.username && <div className='red'>{errors.username.message}</div>}
     
          <input placeholder='password'  {...register("password", {minLength: {value: 7, message: "Min length of password is 7"},})} type="password"/>
          {errors.password && <div className='red'>{errors.password.message}</div>}
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
      </form>
    </div>

    </>
  )
}

export default App
