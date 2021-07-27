import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Button,ButtonGroup,TextField} from '@material-ui/core'



const CodingTest = () => {

    const [state, setstate] = useState(0);
    const [value, setvalue] = useState(0)


const subCount=()=>{
    if(state===0) return null
    setstate(state-1)
}

const subContent=()=>{
    setvalue(state)
}

const handleChange=(e)=>{
    setstate(e.target.value)
}

return (
        <div>
        <h1>Counter testing</h1>
<ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button onClick={()=>setstate(state+1)}>+</Button>
  <TextField 
      placeholder='state value'
      value={state}
      style={{width:'30%'}}
      type='text'
      onChange={handleChange}
  />
  {/* <Button>{state}</Button> */}
  <Button onClick={subCount}>-</Button>
</ButtonGroup>
  <br/>
<Button variant='outlined' color='secondary' onClick={subContent}>Submit</Button>
<h3>Current couter value is {value}</h3>
        </div>
    )
}

export default CodingTest