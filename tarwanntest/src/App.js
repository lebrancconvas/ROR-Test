import React, { Component } from 'react';
import Tarwannlogo from './assets/tarwann02.gif';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Headimage />
        <Content name="Tarwann BNK48 Naja" price="300 Baht"/>
        <Footer />
      </div>
    );
  }
}





class Headimage extends Component{
  render(){
    return(
      <div>
        <img src={Tarwannlogo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
