import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import 'boxicons';
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://127.0.0.1:8000";
  axios.defaults.headers.post['Accept'] = 'application/json';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
 
  return (
    <div className="App">
      <header>
          <a href = "#" className='logo'><box-icon type='solid' name='movie'></box-icon> Filmotopia </a>
          <div className='bx bx-menu' id='menu-icon'>
          </div>
          <ul className='navbar'>
             <li> <Link to="/home" className='home-active'> Home </Link></li>  
             <li> <a href='#movies'> Movies </a></li> 
             <li> <a href='#coming'> Coming </a></li> 
             <li> <a href='#newsletter'> Newsletter </a></li>  
          </ul>
          <Link to="/login" className='btn'>Log in</Link>
      </header>

      <div className='appContent'>
        <Outlet/>
      </div>

      <section className="footer">
        <a href="#" className="logo">
          <i className="bx bxs-movie"></i> Filmotopia
        </a>
        <div className="social">
          <a className='iconLink' href="#"><box-icon  type="logo" name="facebook-square" className="icon"  color='#FF2C1F'></box-icon></a>
          <a className='iconLink' href="#"><box-icon  type="logo" name="instagram" className="icon" color='#FF2C1F'></box-icon></a>
          <a className='iconLink' href="#"><box-icon  type="logo" name="twitter" className="icon" color='#FF2C1F'> </box-icon></a>
          <a className='iconLink' href="#"><box-icon  type="logo" name="tiktok" className="icon" color='#FF2C1F'></box-icon></a>
        </div>
      </section>
      
    </div>
  );
}

export default App;
