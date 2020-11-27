import React, { Component } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./css/navBar.css";
class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="flex-column">
          <Link to="/" className="nav-link">
            <Navbar.Brand>Spotify</Navbar.Brand>
          </Link>
          <Nav className="mr-auto flex-column mb-1">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {/* <Link to="/artist" className="nav-link">
              artist
            </Link>
            <Link to="/album" className="nav-link">
              album
            </Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" id="searchBar" />
          </Form>
        </Navbar>
      </>
    );
  }
}
export default withRouter(NavBar);
