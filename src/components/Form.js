import React, { useState } from 'react';
import '../style.css';

const Form = () => {
  const [formData, setFormData] = useState({
    mobilenumber: '',
    cardnumber: '',
    cardtype: '',
    totallimit: '',
    amountused: '',
    availableamount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch('https://api.example.com/card', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="header">
      <div className="navbar">
        <i className='bx bxs-bank'></i>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
        <div className="user">
          <img src="https://i.pinimg.com/564x/72/ce/03/72ce03846a502ab340849a6ac1b4b33c.jpg" alt="User" />
        </div>
      </div>
      <div className="content">
        <div className="cardform">
          <div className="inputs">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="mnumber">Mobile Number</label>
                <input 
                  type="text" 
                  name="mobilenumber" 
                  placeholder="Mobile Number" 
                  id="mnumber" 
                  autoComplete="off" 
                  value={formData.mobilenumber} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input">
                <label htmlFor="cnumber">Card Number</label>
                <input 
                  type="text" 
                  name="cardnumber" 
                  placeholder="Card Number" 
                  id="cnumber" 
                  autoComplete="off" 
                  value={formData.cardnumber} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input">
                <label htmlFor="ctype">Card Type</label>
                <input 
                  type="text" 
                  name="cardtype" 
                  placeholder="Card Type" 
                  id="ctype" 
                  autoComplete="off" 
                  value={formData.cardtype} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input">
                <label htmlFor="limit">Total Limit</label>
                <input 
                  type="number" 
                  name="totallimit" 
                  placeholder="Total Limit" 
                  id="limit" 
                  min="0" 
                  autoComplete="off" 
                  value={formData.totallimit} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input">
                <label htmlFor="used">Amount Used</label>
                <input 
                  type="number" 
                  name="amountused" 
                  placeholder="Amount Used" 
                  id="used" 
                  min="0" 
                  autoComplete="off" 
                  value={formData.amountused} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input">
                <label htmlFor="available">Available Amount</label>
                <input 
                  type="number" 
                  name="availableamount" 
                  placeholder="Available Amount" 
                  id="available" 
                  min="0" 
                  autoComplete="off" 
                  value={formData.availableamount} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <input type="submit" value="Sign Card" />
            </form>                    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
