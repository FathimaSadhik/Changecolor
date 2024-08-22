import React, {useState} from 'react'
import './App.css'

const App = () => {
const [color,setColor]=useState('black')

  return (
    <div className='div-name'
    style={{backgroundColor:color}}>
        <div className='main-div'>
          <div className='div-button'>
            <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>RED</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>BLUE</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>GREEN</button>
            <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>YELLOW</button>
            <button onClick={()=>setColor("violet")} style={{backgroundColor:"violet"}}>VIOLET</button>
          </div>
          
       </div>
    </div>
    
    
  )
}

export default App


