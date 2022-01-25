import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Navbar />,
    <Hero />,
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


