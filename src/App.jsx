import { useState } from "react";
import "./App.css"

function App() {
  //task1
  const [color, setColor] = useState("#000000");
  
  //task2
  const [maleText, SetMaleText] = useState("")
  const [maleArr, SetMaleArr] = useState([])

  const [femaleText, SetFemaleText] = useState("")
  const [femaleArr, SetFemaleArr] = useState([])
  return (
    <>
      <div>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
        <input type="text" value={color} />
      </div>


      <div>
        <div className="container">
          <label className="label" htmlFor="male-inp">Male : </label>
          <div className="input-box" >
            <input type="text" id="male-inp" value={maleText} onChange={(e)=>SetMaleText(e.target.value)} />
            <button onClick={()=> {
              SetMaleArr([...maleArr, maleText])
              SetMaleText("")
              }}>add</button>
          </div>

          
          <label className="label" htmlFor="female-inp">Female : </label>
          <div className="input-box" >
            <input type="text" id="female-inp" value={femaleText} onChange={(e)=>SetFemaleText(e.target.value)} />
            <button onClick={()=> {
              SetFemaleArr([...femaleArr, femaleText])
              SetFemaleText("")
              }} >add</button>
          </div>
        </div>
        {/*tables */ }
        <div className="container table-container">
          <table>
            <tr>
              <th>
                Male
              </th>
            </tr>
            {maleArr.map((text)=>{
              return (
                <tr>
                  <td>
                    {text}
                  </td>
                </tr>
              )
            })}
          </table>

          <table>
            <tr>
              <th>
                Female
              </th>
            </tr>
            {femaleArr.map((text)=>{
              return (
                <tr>
                  <td>
                    {text}
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </>
  )
}

export default App;
