import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Services';
import CustomerService from './components/CustomerService';
import Form from './components/Form';
import Sign from './components/Sign';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/customerdetails" element={<CustomerService />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/forms" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forms" element={<Forms />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
