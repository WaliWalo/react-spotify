import React, { Component } from "react";
import GalleryList from "./GalleryList";

export default class HomePodcast extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        <GalleryList title="#Rock" />
        <GalleryList title="#POP" />
      </div>
    );
  }
}
