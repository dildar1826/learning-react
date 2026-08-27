//----------------------- MY FIRST PROJECT IN REACT WHILE LEARNING IT ------------------------------
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [pass, setPass] = useState("")
  const [length, setLength] = useState(8)
  const [char, setChar] = useState(false)
  const [num, setNum] = useState(false)
  const [clip, setClip] = useState("")

  const passgenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    let generated = ""
    for (let i = 1; i <= length; i++) {
      let randIndex = Math.floor(Math.random() * str.length)
      generated += str.charAt(randIndex)
    }
    setPass(generated)
  }, [length, char, num])

  const passRef = useRef(null)

  const copybutton = useCallback(() => {
    window.navigator.clipboard.writeText(pass)
    passRef.current?.select()
  }, [pass])

  const pastbutton = useCallback(async () => {
    const text = await navigator.clipboard.readText()
    setClip(text)
  }, [])
  console.log("Test git Synchronizaion .....")
  useEffect(() => {
    passgenerator()
  }, [passgenerator])

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="w-full max-w-md bg-gray-700 text-orange-500 rounded-lg p-4 shadow-md">
          <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              placeholder="Password"
              value={pass}
              readOnly
              className="outline-none w-full py-1 px-3"
              ref={passRef}
            />
            <button
              className="cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={copybutton}
            >
              copy
            </button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min="6"
                max="100"
                className="cursor-pointer"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numCheck"
                checked={num}
                onChange={() => setNum((prev) => !prev)}
              />
              <label htmlFor="numCheck">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="charCheck"
                checked={char}
                onChange={() => setChar((prev) => !prev)}
              />
              <label htmlFor="charCheck">Characters</label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Paste"
          className="outline-none w-full py-1 px-3"
          value={clip}
          onChange={(e) => setClip(e.target.value)}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={pastbutton}
        >
          paste
        </button>
      </div>
    </>
  )
}

export default App