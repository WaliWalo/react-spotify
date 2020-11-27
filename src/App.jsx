import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { Col, Row } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Row>
              <Col xs={2} style={{ position: "absolute" }}>
                <NavBar />
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
                padding: "20px",
                position: "fixed",
                left: "0",
                bottom: "0",
                height: "60px",
                width: "100%",
                backgroundColor: "#F8F8F8",
                borderTop: "1px solid #E7E7E7",
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
