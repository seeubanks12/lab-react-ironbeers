import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import Beers from './components/Beers';
// import axios from 'axios';
import React from 'react';

function App() {

  return (
    <div className="App">

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>
        </div>

  );
}
export default App;
