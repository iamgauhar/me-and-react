import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#94a3b8")

  return (
    <div className='w-full h-screen' style={{ background: color }}>

      <h1 className=' p-4 font-bold text-3xl text-center text-white '>The Color Changer App</h1>

      <div className='border fixed bottom-16 left-1/2 -translate-x-1/2 rounded-full p-1 text-white  flex gap-2'>
        <button onClick={() => setColor("rgb(132 204 22)")} className='px-8 py-4 bg-lime-500 rounded-l-full hover:scale-110 duration-500 '>Green</button>
        <button onClick={() => setColor("rgb(239 68 68)")} className='px-8 py-4 bg-red-500 hover:scale-110 duration-500'>Red</button>
        <button onClick={() => setColor("rgb(249 115 22)")} className='px-8 py-4 bg-orange-500 hover:scale-110 duration-500'>Orange</button>
        <button onClick={() => setColor("rgb(245 158 11)")} className='px-8 py-4 bg-amber-500 hover:scale-110 duration-500'>Yellow</button>
        <button onClick={() => setColor("rgb(20 184 166)")} className='px-8 py-4 bg-teal-500 hover:scale-110 duration-500'>Teal</button>
        <button onClick={() => setColor("rgb(6 182 212)")} className='px-8 py-4 bg-cyan-500 hover:scale-110 duration-500'>Cyan</button>
        <button onClick={() => setColor("rgb(99 102 241)")} className='px-8 py-4 bg-indigo-500  hover:scale-110 duration-500'>Indigo</button>
        <button onClick={() => setColor("rgb(217 70 239)")} className='px-8 py-4 bg-fuchsia-500  hover:scale-110 duration-500'>Fuchsia</button>
        <button onClick={() => setColor("rgb(16 185 129)")} className='px-8 py-4 bg-emerald-500 rounded-r-full hover:scale-110 duration-500'>Emerald</button>
      </div>

    </div>
  )
}

export default App
