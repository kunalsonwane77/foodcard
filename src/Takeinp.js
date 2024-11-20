import React from 'react'
import { useState } from 'react'

function Takeinp(props) {

    let [tname,setname]=useState("")
    let [tprice,setprice]=useState("")
    let [url,seturl]=useState("")
  
    function handlechange(e){
    let inp = e.target.value
    setname(inp)
    
    }
    function handleprice(e){
      let price= e.target.value
      setprice(price)
      
    }
     
    function handleurl(e){
      let url = e.target.value
      seturl(url)
    }

    function btnclick(){
        props.makedata(tname,tprice,url)
         setprice("")
         setname("")
         seturl("")
    }
  return (
    <div className='inputdata'>
          <input type="text" name="" id="" onChange={handlechange} value={tname} placeholder='enter food name' />
          <input type="text" name="" id="" onChange={handleprice} value={tprice} placeholder='enter price'/>
          <input type="url" name="" id="" placeholder='enter url of image' onChange={handleurl} value={url}/>
          <button onClick={btnclick}>Add data</button>
    </div>
  )
}

export default Takeinp