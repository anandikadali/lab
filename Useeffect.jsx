import React,{useState} from 'react'

const Useeffect = () => {
    const[student,setStudent]=useState({
        name:"abc",
        
        college:"svecw"
    })
    const changeme=()=>{
        setStudent({name:"haha"})
    }
  return (
    <div>
      <h3>{student.name}</h3>
      <h3>{student.college}</h3>
      <button onClick={changeme}>change</button>
    </div>
  )
}

export default Useeffect
