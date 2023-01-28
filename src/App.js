import React from 'react';
import './App.css';
import {Navbar,LiveNews,Footer} from './components'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LiveNews/>
      <Footer/>
    </div>
  );
}

export default App;
