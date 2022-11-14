import React from 'react'
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Customers from './pages/Customers';
import CustomerList from './pages/CustomerList';
import CreateTask from './pages/CreateTask';

function App() {

  return (
    <div id="wrapper" className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createCustomer' element={<Customers />} />
          <Route path='/customerList' element={<CustomerList />} />
          <Route path='/CreateTask' element={<CreateTask/>}/> 
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
