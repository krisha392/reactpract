// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css';
import Title from './Title.jsx';
import Product from './product.jsx';
import ProductTab from './ProductTab.jsx';

import Button from './Button.jsx';

import Form from './Form.jsx';
// import {Title } from './Title.jsx'; // when multiple components are exported then


function Decription(){
  return <h3>Description of this!!</h3>;
}

// function App() {
//     return (
//       <ProductTab/>
//     );
// }


function App() {
    return (
      // <Button/>
      <Form/>
    );
}
export default App
