import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [includeNumber, setIncludeNumber] = useState(false)
  const [includeChar, setIncludeChar] = useState(false)
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)

  const generatePassword = () => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeChar) str += "!@#$%^&*-_+=[]{}~`"
    if (includeNumber) str += "0123456789"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)
  }

  useEffect(() => {
    generatePassword()
  }, [includeChar, includeNumber, length])
  // 

  const passRef = useRef(null)
  const showMessage = () => {
    setMessage("Password copied to clipboard")
    setShow(true)

    setTimeout(() => {
      setShow(false)
      setMessage("")
    }, 3000)
  }
  const copyPassword = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
    showMessage()
  }, [password])




  return (
    <>
      <div className=' h-screen w-full '>
        <div className='w-full max-w-2xl min-w-xl border fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 py-10 px-14 rounded-2xl shadow-xl'>
          <h1 className='text-2xl text-center font-bold'>The Password Generator App</h1>
          <div className='flex my-8'>
            <input type="text" readOnly className='w-full p-3 rounded-l-lg' value={password} />
            <button className='py-3 px-6 bg-green-400 hover:bg-green-500 rounded-r-lg' onClick={copyPassword}>Copy</button>
          </div>
          <div className='flex gap-4'>
            <div>
              <input type="range" value={length} max={33} min={8} onChange={(e) => setLength(e.target.value)} />
              <label htmlFor="" className='pl-1'>Length: {length}</label>
            </div>
            <div>
              <input type="checkbox" name="num" id="" onChange={() => setIncludeNumber((pre) => !pre)} />
              <label htmlFor="num" className='pl-1'>Number</label>
            </div>
            <div>
              <input type="checkbox" name="char" id="" onChange={() => setIncludeChar((pre) => !pre)} />
              <label htmlFor="char" className='pl-1'>Special Char</label>
            </div>

          </div>

          {show && <p className='text-center text-green-500 pt-2'>{message}</p>}

        </div>


      </div>
    </>
  )
}

export default App
