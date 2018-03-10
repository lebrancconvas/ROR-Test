import React, { Component } from 'react';

class Header extends Component{
  constructor(props) {
        super(props)

        this.state = {
            growl: "คำถาม : ตาหวานเป็นคนยังไง ?"
        }
    }

  handleClick() {
      this.setState({ growl:"คำตอบ : เป็นคนดีด 2018 ไง ><" })
  }

  render(){
    return(
        <div className="Header">
          <h1>Tarwann BNK48 Unofficial Fansite</h1>
          <button onClick={this.handleClick.bind(this)}>เฉลย</button>
          <h1>{this.state.growl}</h1>
          <h2>อิสราภา</h2>
        </div>
    );
  }
}

export default Header;
