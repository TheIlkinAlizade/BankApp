import React, { useState } from 'react';
import '../style.css';

const CustomerService = () => {
  const [formData, setFormData] = useState({
    customername: '',
    customeremail: '',
    cardtype: '',
    mobilenumber: '',
    accountdto: '',
    loansdto: '',
    cardsdto: '',
    transaction: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    try {
      const response = await fetch('https://api.example.com/customer', { // Replace with your API endpoint
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
          <li><a href="/about">About</a></li>
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
                <label htmlFor="cname">Customer Name</label>
                <input
                  type="text"
                  name="customername"
                  placeholder="Customer Name"
                  id="cname"
                  value={formData.customername}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="cemail">Customer Email</label>
                <input
                  type="text"
                  name="customeremail"
                  placeholder="Customer Email"
                  id="cemail"
                  value={formData.customeremail}
                  onChange={handleChange}
                  autoComplete="off"
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
                  value={formData.cardtype}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="mnumber">Mobile Number</label>
                <input
                  type="text"
                  name="mobilenumber"
                  placeholder="Mobile Number"
                  id="mnumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="accdto">Account Details</label>
                <input
                  type="text"
                  name="accountdto"
                  placeholder="Account Details"
                  id="accdto"
                  value={formData.accountdto}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="loandto">Loans Details</label>
                <input
                  type="text"
                  name="loansdto"
                  placeholder="Loans Details"
                  id="loandto"
                  value={formData.loansdto}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="carddto">Cards Details</label>
                <input
                  type="text"
                  name="cardsdto"
                  placeholder="Cards Details"
                  id="carddto"
                  value={formData.cardsdto}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="transaction">Transaction of the Customer</label>
                <input
                  type="text"
                  name="transaction"
                  placeholder="Transaction of the Customer"
                  id="transaction"
                  value={formData.transaction}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <input type="submit" value="Sign Customer Details" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
