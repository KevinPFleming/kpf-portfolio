import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { WEBSITES }  from './shared/websites';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: WEBSITES
    }; 
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Kevin-P-Fleming</NavbarBrand>
          </div>
        </Navbar>
        <Directory websites={this.state.websites} />
      </div>
    );
  }  
}

export default App;
