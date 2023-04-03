import React from 'react';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar/Navbar.js';

const App = () => {
  return (
    <div>
       <Navbar/>
       <Home/>
       <Footer/>
    </div>
  );
};

export default App;