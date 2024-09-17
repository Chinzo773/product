import Cart from "../Components/cart";


const Page = async () => {
  const JSONdata = await fetch("https://dummyjson.com/products");
  const data = await JSONdata.json();
  const products = data.products;
  console.log(products)

  return (
    <div>
      <div id="container">
        {products.map((item, index) =>(
          <Cart 
            title = {item.title} 
            images = {item.images}
            price = {item.price}
            description = {item.description}
          />
        ))}
      </div>
    </div>
  )
}


export default Page
