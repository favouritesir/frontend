import React from 'react';
import './App.css';
import Header from './comps/Header/Header';
import Shop from './comps/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Review from './comps/Review/Review';
import Inventory from './comps/Inventory/Inventory';
import NotFound from './comps/NotFound/NotFound';
import Pdetails from './comps/Shop/Products/Pdetails/Pdetails';


function App() {
  return (
    <div className="App">
     <Header></Header>
    <Router>
      <Routes>
        <Route exact path="/" element={<Shop/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/product/:productKey" element={<Pdetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
