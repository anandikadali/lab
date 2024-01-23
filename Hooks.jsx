import React,{useState} from 'react'

const Hooks = () => {
    const [count,setCount]=useState(0);
    const [msg,setMsg]=useState('helllo');
    const update=()=>{
        setCount(count+1)
    };
    const updatetext=()=>{
        setMsg('hoo')
    };
  return (
    <div>
      <h1>count:{count}</h1>
      <h1>{msg}</h1>
      <button onClick={updatetext}>click</button>
      <button onClick={update}>click</button>
    </div>
  )
}

export default Hooks
