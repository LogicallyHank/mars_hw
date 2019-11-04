import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'This is neither pro nor an iPhone.',
    price: 'Free'
  },
  {
    item: 'iPhone 11 Pro',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567812930312',
    description: "The best iPhone yet... for Pros only!",
    price: `$1000`
  },
  {
    item: 'AirPods Pro',
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572296738299',
    description: "These AirPods are not only cool... they're Pro!",
    price: `$250`
  },
  {
    item: 'iPhone 11 ',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-purple-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567021766320',
    description: "This iPhone isn't Pro but it is cool!",
    price: `$700`
  },
]

function App() {
  return (
    <div className="App">
        <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function createProduct(singleProduct) {
  return (
    <Product item={singleProduct.item} image={singleProduct.image} description={singleProduct.description} price={singleProduct.price}/>
  )
}

function ShoppingCart() {
  let products = shoppingCartItems.map(createProduct);
  return(
    <div className="cart">
      {shoppingCartItems.map(item=> {
        return Product(item);
      })}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <img src={props.image} width="100"/>
      <p className="product-title">{props.item}</p>
      <p className="product-description">{props.description}</p>
      <p className="product-price">{props.price}</p>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
