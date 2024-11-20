import React from 'react'

function Mycards(props) {
   

  return (
    <div className='card'>
        <img src={props.url} alt="" />
        <h1> {props.name}</h1>
        <h2>Rs: {props.price}</h2>
        <button onClick={props.addtocart} value={props.id}>Add to Cart</button>
    </div>
  )
}

export default Mycards