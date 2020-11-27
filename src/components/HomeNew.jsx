import React, { Component } from "react";
import SingleGallery from "./SingleGallery";

export default class HomeNew extends Component {
  render() {
    return (
      <div>
        <SingleGallery title="#RECENT" />
        <SingleGallery title="#TGIF" />
      </div>
    );
  }
}
