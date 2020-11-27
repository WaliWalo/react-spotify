import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleGallery from "./SingleGallery";
export default class GalleryList extends Component {
  render() {
    return (
      <div>
        <Container className="ml-5">
          <h1>{this.props.title}</h1>
          <Row>
            {this.props.albums.map((album, index) => (
              <Col xs={6} md={4} className="my-2" key={index}>
                <SingleGallery album={album} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
