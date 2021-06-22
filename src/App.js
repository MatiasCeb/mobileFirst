import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainExchange from './components/MainExchange';
import MainProductDetail from "./components/MainProductDetail";
import BitcoinImg from './components/BitcoinImg';
import Plans from './components/Plans';


class App extends Component {
  render() {
    return (      
      <div className="App">
        <Header />
        <main className="main">
          <MainExchange/>
          <MainProductDetail/>
          <BitcoinImg/>
          <Plans/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
