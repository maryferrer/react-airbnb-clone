import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Navbar />,
    <Hero />,
    <Card 
      img="./image 12.png" 
      rating='5.0' 
      reviewCount={6} 
      country='USA' 
      title='Life Lessons with Katie Zaferes' 
      price={136}
    />,
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


