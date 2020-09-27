import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark colour="primary">
        <div className="container">
          <NavbarBrand href='/'>
            Coursera react part 2
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
      </div>
  );
}

export default App;
