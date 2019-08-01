import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import SectionPotion from './components/SectionPotion';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
          <Header></Header>
          <NavBar></NavBar>
          <SectionPotion></SectionPotion>
          <Footer></Footer>
    </div>
  );
}

export default App;