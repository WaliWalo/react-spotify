import React, { Component } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./css/navBar.css";
class NavBar extends Component {
  state = {
    query: "",
  };

  handleSearch = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      e.preventDefault();
      this.props.handler(this.state.query);
      this.props.history.push("/search");
    } else {
      this.setState({ query: e.currentTarget.value });
    }
  };

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
            <FormControl
              type="text"
              placeholder="Search"
              id="searchBar"
              onKeyDown={this.handleSearch}
              onChange={this.handleSearch}
              value={this.state.query}
            />
          </Form>
        </Navbar>
      </>
    );
  }
}
export default withRouter(NavBar);
