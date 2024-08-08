import React, { useState, useEffect } from 'react';
import '../style.css'; // Make sure to include your styles

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState('general');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = getApiUrl(selectedOption);
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedOption]);

  const getApiUrl = (option) => {
    switch (option) {
      case 'general':
        return '/api/general'; 
      case 'card':
        return '/api/card';
      case 'security':
        return 'api/security';
      case 'account':
        return '/api/account';
      default:
        return '/api/general';
        // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
    
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
        <div className="user userbigger">
          <img src="https://i.pinimg.com/564x/72/ce/03/72ce03846a502ab340849a6ac1b4b33c.jpg" alt="User" />
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="texts">
            <h1>Welcome, Helix!</h1>
          </div>
          <div className="options">
            <div className="option">
              <input
                id="general"
                type="radio"
                value="general"
                name="option"
                checked={selectedOption === 'general'}
                onChange={handleOptionChange}
              />
              <label htmlFor="general">General</label>
            </div>
            <div className="option">
              <input
                id="card"
                type="radio"
                value="card"
                name="option"
                checked={selectedOption === 'card'}
                onChange={handleOptionChange}
              />
              <label htmlFor="card">Card</label>
            </div>
            <div className="option">
              <input
                id="security"
                type="radio"
                value="security"
                name="option"
                checked={selectedOption === 'security'}
                onChange={handleOptionChange}
              />
              <label htmlFor="security">Security</label>
            </div>
            <div className="option">
              <input
                id="account"
                type="radio"
                value="account"
                name="option"
                checked={selectedOption === 'account'}
                onChange={handleOptionChange}
              />
              <label htmlFor="account">Account</label>
            </div>
          </div>
        </div>
        <div className="list">
          <ul>
            {data.length > 0 ? (
              data.map((item, index) => (
                <li key={index}>
                  <span>{item.id}:</span>
                  <span><img style={{objectFit:'cover', width:'100px', height:'100px'}} src={item.url} alt={item.id} /></span>
                </li>
              ))
            ) : (
              <li>No data available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
