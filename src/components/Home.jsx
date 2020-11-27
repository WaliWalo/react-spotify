import React, { Component } from "react";
import { Nav, Spinner } from "react-bootstrap";
import HomeTrending from "./HomeTrending";
import { fetchAlbumsByArray } from "../api/deezerApi";
import "./css/home.css";

const searchQuery = ["queen", "avicii"];

export default class Home extends Component {
  state = {
    loading: true,
    albums: [],
  };

  componentDidMount = async () => {
    const albums = await fetchAlbumsByArray(searchQuery);
    this.setState({ loading: false, albums: albums });
  };

  render() {
    return (
      <>
        <div className="my-2">
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              {/* <Link to="/home/Trending" eventKey="/home" className="nav-link">
                  Trending
                </Link> */}
              <Nav.Link eventKey="/home">Trending</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* <Link to="/home/podcasts" className="nav-link">
                Podcasts
              </Link> */}
              <Nav.Link eventKey="link-1">Podcasts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">New Releases</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {!this.state.loading ? (
          <HomeTrending title="Trending" albums={this.state.albums} />
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        {/* <Route
          path="/home/podcasts"
          exact
          render={(props) => <HomePodcast title="Podcasts" />}
        />
        <Route
          path="/home/newRelease"
          exact
          render={(props) => <HomeNew title="New Releases" />}
        /> */}
      </>
    );
  }
}
