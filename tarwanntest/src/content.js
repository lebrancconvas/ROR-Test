import React, { Component } from 'react';

class Content extends Component{
  render(){
    return(
      <div className="Content">
        <h1>Hello Tarwann</h1>
        <button onClick={this.changetarwann}>Click สิ</button>
        <p>The Official Website of Tarwann BNK48 Fanclub</p>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <a href="#">Hello</a>
      </div>
    );
  }
}

export default Content;
