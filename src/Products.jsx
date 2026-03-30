import React, { Suspense, useState } from 'react';
import CartData from './CartData';
import ProductCard from './ProductCard';

const fetchData = async()=>{
    const response = await fetch('/productData.json');
    return response.json();
}
const Products = ({cart,setCart}) => {
    const [toggleStatus,setToggleStatus] =useState("products");
    const productData = fetchData();
    function handleToggle(buttonClicked){
       setToggleStatus(buttonClicked);
    }
    return (
        <div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-center'>
                    <h1 className='text-[48px] text-black font-extrabold'>Premium Digital Tools</h1>
                    <p className='mb-6'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
               <div className='text-center mb-10'>
                 <div className='text-center rounded-3xl shadow-lg p-1 inline-flex justify-center gap-1'>
                    <button className={`btn rounded-3xl border ${toggleStatus==="products"? "btn-primary": ""}`} onClick={()=>handleToggle("products")}>Products</button>
                    <button className={`btn rounded-3xl border ${toggleStatus!=="products"? "btn-primary": ""}`} onClick={() =>handleToggle("cart")}>Cart(<span>{cart.length}</span>)</button>
                </div>
                </div>
                <div >
                    <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
                        {
                            
                            (toggleStatus==="products"?(<ProductCard productData={productData} setCart={setCart} cart={cart}></ProductCard>):(<CartData cart={cart} setCart={setCart}></CartData>))
                        }
                    </Suspense>

                </div>
            </div>
        </div>
    );
};

export default Products;