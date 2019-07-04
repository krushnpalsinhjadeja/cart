import React from 'react';
import Counters from './components/counters';

import './App.css';
import Navbar from './components/navbar'; 

function App() {
  return (
    <div>
    <Navbar/>
    <main className="container"/>
    <Counters/>
    </div>
  );
}

export default App;
