import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen
    duration-200" 
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-blue-400 px-3 py-2 rounded-3xl"
        >
          <button onClick={()=>setColor("red")}
          className="h-10 w-20 outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("green") }
          className="h-10 w-20 outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button> 
          <button onClick={() => setColor("yellow") }
          className=" h-10 w-20 outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={() => setColor("white") }
          className="h-10 w-20 outline-none px-4 py-1
          rounded-full text-black shadow-lg"
          style={{backgroundColor:"white"}}>White</button>
          <button onClick={() => setColor("black") }
          className="h-10 w-20 outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>Black</button>
          <button onClick={() => setColor("blue") }
          className="h-10 w-20 outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("orange") }
          className="h-10 w-20 outline-none px-0 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => setColor("purple") }
          className="h-10 w-20 outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={() => setColor("pink") }
          className="h-10 w-20 outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
