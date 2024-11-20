import React, { useState } from 'react'
import "./food.css"
import Takeinp from './Takeinp'
import Mycards from './Mycards'
import Gotocart from './Gotocart'
import { useEffect } from 'react'


function Foodorder() {

let [task,settask]=useState([])
let [cart,setcart]=useState([])
let [total,settotal]=useState(0)

function makedata(tname,tprice,url){


  let data={

    iurl:url,
    price:+tprice,
    name:tname,
    quentity:1,
    status:false,
    id:Date.now()*Math.random()
  }
  
  settask([...task,data])
   
  

}

function addtocart(e){
  let btnval= e.target.value


      task.map((el)=>{
        return btnval==el.id?setcart([...cart,el]):el
      })

      


}

function clearwithone(btnval){
  

  let delitem= cart.filter((el)=>{
      return btnval!=el.id
  }) 
  setcart(delitem)


}
function calculateTotal() {
  let sum = 0;
  cart.map((el) => {
    return sum +=el.price*el.quentity ;
    
  });
  settotal(sum);
 
}


useEffect(() => {
  calculateTotal();
}, [cart]);









  return (
    <>
        <div className="foodcontainer">
          <Takeinp makedata={makedata}/>
          <div className="para">


            <div className="cards">
            {task.map((el)=>{
            return <Mycards key={el.id} price={el.price} name={el.name} url={el.iurl} id={el.id} addtocart={addtocart}  />
          })}

            </div>
            <div className="mycart">

             
              
                <h1>Cart Details</h1>

                 {cart.length==0?"your cart is empty":""}
                 {cart.map((el)=>{

                    
                    return <Gotocart price={el.price} image={el.iurl} key={el.id} clearwithone={clearwithone} quentity={el.quentity} id={el.id} cart={cart} setcart={setcart}/> 
                 })}

                
                <h1>Total is : {total}</h1>
          </div>
          </div>
          
       

        </div>
    </>
  )
}

export default Foodorder