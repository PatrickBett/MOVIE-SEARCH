import {useState} from "react"
import MovieContainer from './MovieContainer'

function Header() {
  const [input,setInput] = useState('')

  const handleOnChange = (event)=>{
    const userInput = event.target.value
    
    setInput(userInput)
  }


  return (
   <div>
     <div className= "header">
       <h1 className="h1">Movie Zone</h1>
       <input type="text" placeholder="Search Movie" onChange={handleOnChange} className="user-input"/>
            
    </div>
    <MovieContainer input={input}/> 
   </div> 
  )
}

export default Header
