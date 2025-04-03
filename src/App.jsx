import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");

  return (
    <div>
      <input type="color" onChange={(e)=>setColor(e.target.value)}/>
      <input type="text" value={color} />
    </div>
  )
}

export default App;
