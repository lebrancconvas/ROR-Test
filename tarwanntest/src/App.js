import React, { Component } from 'react';
import Tarwannlogo from './assets/tarwann02.gif';
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

class Header extends Component{
  constructor(){
    super();
    this.state = {
        name : "Tarwann Naja"
    }
  }
  render(){
    setInterval(()=>{
        this.setState({name : "คนดีด 2018"});
    },1000);
    return(
        <div className="Header">
          <h1>Tarwann BNK48 Official Fansite</h1>
          <h2>{this.state.name}</h2>
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

class Content extends Component{
  render(){
    return(
      <div className="Content">
        <h1>Hello Tarwann</h1>
        <p>The Official Website of Tarwann BNK48 Fanclub</p>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <a href="#">Hello</a>
      </div>
    );
  }
}

class Footer extends Component{
  render(){
    return(
      <div className="Footer">
        <h3>Copyright - BNK48</h3>
      </div>
    );
  }
}

export default App;
