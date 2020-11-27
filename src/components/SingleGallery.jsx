import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class SingleGallery extends Component {
  render() {
    return (
      <Image
        src={this.props.album.album.cover}
        rounded
        onClick={() =>
          this.props.history.push("/album/" + this.props.album.album.id)
        }
      />
    );
  }
}

export default withRouter(SingleGallery);
