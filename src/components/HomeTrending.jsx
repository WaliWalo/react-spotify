import React, { Component } from "react";
import GalleryList from "./GalleryList";

export default class HomeTrending extends Component {
  render() {
    return (
      <div>
        <GalleryList
          title="TRENDING"
          albums={this.props.albums[0].data.slice(0, 6)}
        />
        <GalleryList
          title="CLASSICS"
          albums={this.props.albums[1].data.slice(0, 6)}
        />
      </div>
    );
  }
}
