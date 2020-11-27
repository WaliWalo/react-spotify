import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
import Search from "./components/Search";

import { Col, Row } from "react-bootstrap";

class App extends React.Component {
  state = { query: "" };
  handler = (query) => {
    this.setState({ query: query });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Row>
              <Col xs={2} style={{ position: "absolute" }}>
                <NavBar handler={this.handler} />
              </Col>
              <Col
                xs={10}
                style={{
                  left: "15%",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Route
                  path="/"
                  exact
                  render={(
                    props // props are history, location, match
                  ) => <Home title="Home" {...props} />} // in this way you can pass your own props along with the router ones
                />
                <Route
                  path="/artist/:id"
                  exact
                  render={(
                    props // props are history, location, match
                  ) => <Artist title="Artist" {...props} />} // in this way you can pass your own props along with the router ones
                />
                <Route
                  path="/album/:id"
                  exact
                  render={(
                    props // props are history, location, match
                  ) => <Album title="Album" {...props} />} // in this way you can pass your own props along with the router ones
                />
                <Route
                  path="/search"
                  exact
                  render={(
                    props // props are history, location, match
                  ) => (
                    <Search
                      title="Search"
                      query={this.state.query}
                      {...props}
                    />
                  )} // in this way you can pass your own props along with the router ones
                />
              </Col>
            </Row>
            <div
              style={{
                display: "block",
                padding: "20px",
                height: "60px",
                width: "100%",
              }}
            />
            <Row
              className="mx-auto"
              style={{
                position: "fixed",
                left: "0",
                bottom: "0",
                height: "70px",
                width: "100%",
                backgroundColor: "#282828",
              }}
            >
              <Footer />
            </Row>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
