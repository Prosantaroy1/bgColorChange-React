import { useState } from "react"

function App() {

  //useState decialer
  const [color, setColor] = useState('green')

  return (
    <>
      <div className="w-full h-screen" style={{background: color}}>

      </div>
    </>
  )
}

export default App
