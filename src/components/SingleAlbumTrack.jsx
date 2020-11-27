import React, { Component } from "react";

export default class SingleAlbumTrack extends Component {
  render() {
    return (
      <>
        <td>{this.props.track.title}</td>
        <td>{this.props.track.duration}</td>
      </>
    );
  }
}
