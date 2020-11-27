import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { fetchAlbumsBySearch } from "../api/deezerApi";
import GalleryList from "./GalleryList";

export default class Search extends Component {
  state = {
    searchedAlbums: [],
    loading: true,
  };

  componentDidMount = async () => {
    const searchedAlbums = await fetchAlbumsBySearch(this.props.query);
    this.setState({ searchedAlbums: searchedAlbums, loading: false });
  };

  componentDidUpdate = async (prevProp) => {
    if (this.props.query !== prevProp.query) {
      const searchedAlbums = await fetchAlbumsBySearch(this.props.query);
      this.setState({ searchedAlbums: searchedAlbums, loading: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <GalleryList
            title={this.props.query}
            albums={this.state.searchedAlbums.data}
          />
        )}
      </div>
    );
  }
}
