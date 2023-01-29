import React from 'react';
import './App.css';
import {Navbar,LiveNews,Footer,EntertainmentNews} from './components'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LiveNews/>
      <EntertainmentNews/>
      <Footer/>
    </div>
  );
}

export default App;
