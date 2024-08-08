import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Service = () => {
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
            <h1>Welcome, Helix!</h1>
            <p>What would you like to do today?</p>
          </div>
        </div>
        <div className="image">
          <div className="services">
            <Link to="/forms" className="joinbtn">Expenses</Link>
            <Link to="/forms" className="joinbtn">Loan</Link>
            <Link to="/forms" className="joinbtn">Payriff</Link>
            <Link to="/forms" className="joinbtn">Card</Link>
            <Link to="/customerdetails" className="joinbtn">Customer Details</Link>
          </div>
          <div className="placeholder">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
