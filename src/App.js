import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Section from './Section/Section';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsStarFill } from 'react-icons/bs';
import StarRating from './Section/StarRating';
// import Data from './Components/Data';


// import data from './Components/Data';

function App() {  
  const [cartItems, setCartItems] = useState([]);
  const [buttonText,setButtonText] = useState('Add to cart')
  const [buttonText1,setButtonText1] = useState('Add to cart')
  // const [buttonText3,setButtonText3] = useState('Add to cart')
  // const [buttonText4,setButtonText4] = useState('Add to cart')
  // const [cartDecrement,setCartDecrement] = useState(cartItems)
  
  // const [addCart1,setAddCart1] = useState('Add to Cart');  
  // const [cart,setCart] = useState(0);
  // const onChange = () => {
  //   setAddCart(addCart.length + 1 );
  //   console.log('abcd') }

  // const handleDecrement = () => {
    // setCartItems(cartItems - 1)      
  // }
  const handleDecrement= () => {    
  }   

  const handleClick = () => {
    setCartItems(cartItems + 1);
    // console.log(cartItems)
    // setIsButtonEnabled(!isButtonEnabled); 
    // setCartDecrement(cartDecrement - 1) 
    // console.log(cartDecrement)   
    setButtonText("Remove from cart") 
     setButtonText1("Remove from cart") 

    // setButtonText2("Remove from cart") 
    
    // setButtonText3("Remove from cart")  
    // setButtonText4("Remove from cart")
          
    // <button onClick={handleDecrement}>Remove from cart</button>
  // console.log('13')
  }


  const handleClick1 = () => {
    setCartItems(cartItems + 1);
    // console.log(cartItems)
    // setIsButtonEnabled(!isButtonEnabled); 
    // setCartDecrement(cartDecrement - 1) 
    // console.log(cartDecrement)      

    setButtonText1("Remove from cart") 
    
    // setButtonText3("Remove from cart")  
    // setButtonText4("Remove from cart")
          
    // <button onClick={handleDecrement}>Remove from cart</button>
  // console.log('13')
  }
  

  // const handleChange = (e) => {
  //   if (cartItems > 0) {
  //     setIsButtonEnabled(!isButtonEnabled)
  //   }
  // }

  // const handleEvent = () => {
  //   setAddCart(addCart-1)
  // }





  // const handleEvent = (event) => {
  //   setCart(cart + 1);
  //   console.log('button clicked')
  //   setAddCart1("Remove from Cart");
  //   console.log(addCart1)
  // }


  return (
    <div>
      <Navigation count={cartItems.length}  />
      <Header />
      <Footer />
      <Section text={buttonText} handleClick={handleClick}/>
      <Section text1={buttonText1} handleClick1={handleClick1} />
      {/* <Section text3={buttonText3} onClick={handleClick} />
      <Section text4={buttonText4} onClick={handleClick} /> */}
      {/* <Data /> */}

    </div>
  );
}

export default App;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BiStarFill } from 'react-icons/bi';

// const StarRating = () => {
//   return (
//     <div className="d-flex justify-content-center small text-warning mb-2">
//       <BiStarFill />
//       <BiStarFill />
//       <BiStarFill />
//       <BiStarFill />
//       <BiStarFill />
//     </div>
//   );
// };

// export default StarRating;
// oaq-nhhq-obv