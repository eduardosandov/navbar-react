import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} exact />                        
          <Route path='/about' element={<About />} exact />                        
          <Route path='/skills' element={<Skills />} exact />                        
          <Route path='/contact' element={<Contact />} exact />                        
          <Route path='/signup' element={<Signup />} exact />                        
        </Routes>
        </Navbar>
    </Router>
  );
}

export default App