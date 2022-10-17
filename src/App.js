import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import CustomerList from './pages/CustomerList';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createCustomer' element={<Customers />} />
        <Route path='/customerList' element={<CustomerList />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
