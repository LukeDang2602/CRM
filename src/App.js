import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Customer from './pages/Customer';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Customer' element={<Customer />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
