import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Images/icons/home_icon.png";

const Styles = styled.div`
  .navbar {
    background-color: rgba(255, 255, 255, 0);
    
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    font-size: 115%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
    }
  }

  .navbar-brand {
    font-family: "Pacifico";
  }

  .nav-link {
    font-family: "Sofia";
  }

  #menu{
    float: right;
  }
  
`;

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img
            style={{
              width: 200,
              height: 100,
            }}
            src={logo}
            alt="Logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Brand href="/" style={{}}>
          Transcripto
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="menu">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Francais</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to="/">Anglais</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
