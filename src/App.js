import React from 'react';
// import logo from './logo.svg';
import { navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar dark colour="danger">
        <div className="container">
          <NavbarBrand href='/'>
            Coursera react part 2
          </NavbarBrand>
        </div>
      </navbar>
      </div>
  );
}

export default App;
