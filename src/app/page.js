'use client';

import { useEffect, useState } from "react";
import Cart from "../Components/cart";
import CategoryOption from "../Components/Category";


const Page = () => {
  const [count, setSkipcount] = useState(0)
  const [products, setProducts] = useState([])
  const [categor, setCategory] = useState([])
  const [chosen_cate, setChosen] = useState('')

  const fetchCategory = async () => {
    const cate = await fetch(
      `https://dummyjson.com/products/category-list`
    )
    const cate_data = await cate.json()
    return setCategory(cate_data)
  }

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/?limit=9&skip=${count}`
    );
    const data = await response.json();
    return setProducts(data.products);
  }


  useEffect(() => {
    fetchProducts()
  }, [count])

  useEffect(() => {
    fetchCategory()
  }, [])


  function HandleCategory(item){
    setChosen(item)
    console.log(item)
    setProducts(products.filter(products => products.category === item))
    console.log(products)
  }

  function HandleSkip(){
    if (count != 0){
      setSkipcount(count-9)
    }
  }


  



  return (
    <div>
      {/* <div id="header">
        <select onChange={e => HandleCategory(e.target.value)}>
          {categor.map((item, index) =>(
            <CategoryOption
              key = {index}
              category = {item}
            />
          ))}
        </select>
      </div> */}
      <div id="out_cont">
        <div id="container">
          {products.map((item, index) =>(
            <Cart 
              category = {item.category}
              id = {item.id}
              title = {item.title} 
              images = {item.images}
              price = {item.price}
              description = {item.description}
            />
          ))}
        </div>
        <div id="buttons">
        <button 
          onClick={() => HandleSkip()}
          className="button_style" 
        >
          &lt; Previous
        </button>
          <button onClick={() => {setSkipcount(count + 9)}} className="button_style">Next &gt; </button>
        </div>
      </div>
    </div>
  )
}


export default Page
