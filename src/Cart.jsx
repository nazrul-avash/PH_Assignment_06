import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({cart,setCart}) => {
    function handleDelete(item){
        const tempCart = cart.filter((prod)=>prod.name !== item.name);
        setCart(tempCart);
        toast.warning(`${item.name} deleted`)
      
    }
    function checkOut(){
        const temp =[];
        setCart(temp);
    }
    return (
        <div className='shadow-md mb-6 pb-5 '>
            <h1 className='mb-6 p-5 text-black text-2xl'>Your Cart</h1>
            <ul className="list  rounded-box space-y-5">
            {
                cart.map((item)=>{
                    return(
                        
                            <li className="list-row mb-4 bg-base-100 grid gap-5">
                                <div><img className="size-10 rounded-box" src={item.icon}/></div>
                                <div>
                                <div>{item.name}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">${item.price}</div>
                                </div>
                                <button className="btn  btn-ghost text-red-500" onClick={()=>handleDelete(item)}>
                                Delete
                                </button>
                            </li>
                        
                    )
                })
            
            }
            <li className='list-row mb-4 bg-base-100 flex justify-between px-8 font-extrabold'>
                
                    <p>Total</p>
                    <p>{cart.map(el=>el.price).reduce((acc,el)=>{return (acc +el);},0).toFixed(3)}</p>
                
            </li>
            
            </ul>
            <button className="btn btn-primary btn-block text-white rounded-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-[70%] mx-auto block" onClick={checkOut}>Proceed To Checkout</button>
        </div>
    );
};

export default Cart;