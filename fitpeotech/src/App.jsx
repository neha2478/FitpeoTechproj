import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Barcomp from "./Components/Navbar/Barcomp.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Product from './Components/Product.jsx';
import Coustomer from './Components/Coustomer.jsx';
import Income from './Components/Income.jsx';
import Promote from './Components/Promote.jsx';
import Help from './Components/Help.jsx';

import './Global.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Barcomp/>}>
            <Route path="/barcomp/dashboard" element={<Dashboard/>}/>
            <Route path="/barcomp/product" element={<Product/>}/>
            <Route path="/barcomp/coustomer" element={<Coustomer/>}/>
            <Route path="/barcomp/income" element={<Income/>}/>
            <Route path="/barcomp/promote" element={<Promote/>}/>
            <Route path="/barcomp/help" element={<Help/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

