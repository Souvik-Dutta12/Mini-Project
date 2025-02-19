"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);

    setTitle("")
    setDesc("")

  }
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2 className='text-xl font-semibold text-yellow-500'>No Task Available!</h2>


  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className='border-b-2 p-3 rounded-md flex justify-between items-center border-yellow-500 '>
        <div className='flex flex-col gap-1 mb-5 w-2/'>
        <h5 className='text-2xl text-yellow-500 font-semibold'>{t.title}</h5>
        <h6 className='text-lg text-zinc-400 font-medium'>{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-500 px-3 py-2 text-xl font-bold rounded-md'>Delete</button>
      </li>
    })
  }
  return (
    <>
      <h1 className='text-3xl font-bold text-yellow-500 p-10 text-center'>Souvik's TO-DO</h1>
      <form onSubmit={submitHandler} className='flex items-center '>
        <div className='flex items-start w-2/3'>
        <input type='text'
          className='text-xl border-2 border-yellow-500 px-3 py-2 m-5 bg-transparent text-yellow-500 rounded-md focus:outline-none'
          placeholder='Enter Title Here... '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea type='text'
          className='text-xl border-2 w-1/2 h-[100px] border-yellow-500 px-3 py-2 m-5 bg-transparent text-yellow-500 rounded-md resize-none focus:outline-none'
          placeholder='Enter Description Here... '
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        </div>
        <button className='bg-yellow-500 border-none text-xl text-zinc-950 px-3 py-2 rounded-md font-bold m-5'>Add Task</button>
      </form>

      <br />

      <div className='py-5 px-8 bg-zinc-800'>
        <ul>
          {renderTask}
        </ul>


      </div>
    </>

  )
}

export default page
