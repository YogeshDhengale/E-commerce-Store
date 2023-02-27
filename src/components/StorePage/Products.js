import React, { useEffect, useState } from 'react'
import './Products.scss'
import Product from './Product'
import axios from 'axios'

function Products() {
    const [loding, setLoding]=useState("Loding...")
    const [product, setProduct]=useState()
    useEffect(()=>{
      const fetchData= async ()=>{
        try{
            const res =await axios.get(process.env.REACT_APP_DEV_URL+ "/api/products?populate=*", {
              headers:{
                  Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
          
              },
          });

            setProduct(res.data)
        } catch (error){
            console.log(error);
            return error;
        }
    
    };

    fetchData();

      }, [])
    

    return (
        <div className="products-container">
            <div className="sec-heading">
                Products </div>
            <div className="products">
            {product?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products