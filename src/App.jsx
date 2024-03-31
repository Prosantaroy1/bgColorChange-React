import { useState } from "react"

function App() {

  //useState decialer
  const [color, setColor] = useState('green')

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center" style={{background: color}}>
          <div className="fixed text-white gap-4 flex rounded-2xl bottom-12 bg-white px-4 py-2 border outline-none">
              <button onClick={()=>setColor('red')} className="bg-red-500 rounded-xl px-3 py-1">red</button>
              <button onClick={()=>setColor('black')} className="bg-black  rounded-xl px-3 py-1">black</button>
              <button onClick={()=>setColor('aqua')} className="rounded-xl bg-sky-400 px-3 py-1">sky</button>
              <button onClick={()=>setColor('purple')} className="rounded-xl bg-lime-700 px-3 py-1">purple</button>
              <button onClick={()=>setColor('beige')} className="rounded-xl bg-amber-700 px-3 py-1">beige</button>
              <button onClick={()=>setColor('white')} className="rounded-xl bg-fuchsia-800 px-3 py-1">white</button>
          </div>
      </div>
    </>
  )
}

export default App
