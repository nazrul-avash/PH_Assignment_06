import React, { use } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({productData,setCart,cart}) => {
    const products = use(productData);
    function addToCart(product){
        const tempArray = [...cart,product];
        setCart(tempArray);
         toast.success(`${product.name} added to cart 🛒`);
    }
    return (
      products.map((product)=>{
        return (
        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className='flex justify-end'><span className="badge badge-xs badge-warning">{product.tag}</span></div>
    <div className=''><img src={product.icon} className=''></img></div>
    <div className="flex justify-between">
      <h2 className="text-2xl font-bold">{product.name}</h2>
    </div>
    <p className='text-[16px] text-[#627382]'>{product.description}</p>
    
    <span className="text-xl">${product.price}/{product.period}</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        product.features.map((text)=>{
            return (
                <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{text}</span>
      </li>
            )
        })
      }
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA]" onClick={(product)=>addToCart(product)}>Buy Now</button>
    </div>
  </div>
</div>)
      })
    );
};

export default ProductCard;