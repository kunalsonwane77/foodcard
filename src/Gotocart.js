import React, { useState } from 'react'

function Gotocart({price,image,clearwithone,id,quentity,setcart,cart}) {


function itemadd(e){
  let btnval= e.target.value

  let addq=cart.map((el)=>{
    return btnval==el.id? {...el,quentity:el.quentity+1}:el
  })

  setcart(addq)
 
    
   
}
function itemsub(e){  
    let btnval= e.target.value
    
    let subq=cart.map((el)=>{
      return btnval==el.id? {...el,quentity:el.quentity-1}:el
    })

    setcart(subq)


    if(quentity==1){
    clearwithone(btnval)
    }
    

}

  return (
    <div className='cart'>
        <img src={image} alt="" />
        <h2>Rs : {quentity*(price)}</h2>
        <button onClick={itemsub} value={id}>-</button>
        <p>{quentity}</p>
        <button onClick={itemadd} value={id}>+</button>

    </div>
  )
}

export default Gotocart