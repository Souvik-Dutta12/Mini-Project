"use client"
import React, { useState } from 'react'

const page = () => {
  const [tittle, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  return (
    <>
      <h1 className='text-3xl font-bold text-yellow-500 p-10 text-center'>Souvik's TO-DO</h1>
      <form>
        <input type='text'
          className='text-xl border-2 border-yellow-500 px-3 py-2 m-5 bg-transparent text-yellow-500 rounded-md focus:outline-none'
          placeholder='Enter Task Here... '
        />
        <input type='text'
          className='text-xl border-2 border-yellow-500 px-3 py-2 m-5 bg-transparent text-yellow-500 rounded-md focus:outline-none'
          placeholder='Enter Description Here... '
        />
        <button className='bg-yellow-500 border-none text-xl text-zinc-950 px-3 py-2 rounded-md font-bold m-5'>Add Task</button>
      </form>
    </>

  )
}

export default page
