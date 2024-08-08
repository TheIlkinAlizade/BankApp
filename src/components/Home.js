import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Home = () => {
  return (
    <div className="header">
      <div className="navbar">
        <i className='bx bxs-bank'></i>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        <div className="user">
          <img src="https://i.pinimg.com/564x/72/ce/03/72ce03846a502ab340849a6ac1b4b33c.jpg" alt="User" />
        </div>
      </div>
      <div className="content">
        <div className="title">
          <div className="texts">
            <h1>EazyBank</h1>
            <p>Problems? No more!</p>
          </div>
        </div>
        <div className="image">
          <Link to="/signin" className="joinbtn">Start now!</Link>
          <div className="placeholder">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
