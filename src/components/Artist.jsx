import React, { Component } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import ArtistAlbumList from "./ArtistAlbumList";
import "./css/artist.css";
import { fetchAlbumsBySearch, fetchArtistById } from "../api/deezerApi";
import SingleGallery from "./SingleGallery";

export default class Artist extends Component {
  state = {
    artistDetails: {},
    albumDetails: {},
    loading: true,
  };

  componentDidMount = async () => {
    const artistDetails = await fetchArtistById(this.props.match.params.id);
    const albumDetails = await fetchAlbumsBySearch(artistDetails.name);
    this.setState(
      {
        artistDetails: artistDetails,
        albumDetails: albumDetails,
        loading: false,
      },
      () => console.log(albumDetails)
    );
  };
  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <>
            <Card className="bg-dark text-white">
              <Card.Img
                src={this.state.artistDetails.picture_xl}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Container id="header">
                  <Row>
                    <Col>
                      {this.state.artistDetails.nb_fan} Monthly Listeners
                      <h1>{this.state.artistDetails.name}</h1>
                      <Button variant="success" className="mx-2">
                        Play
                      </Button>
                      <Button variant="secondary">Follow</Button>
                    </Col>
                  </Row>
                </Container>
              </Card.ImgOverlay>
              <Card.Body>
                <Container>
                  <Row>
                    {this.state.albumDetails.data.map((album, index) => (
                      <Col xs={4} md={2} className="my-2" key={index}>
                        <SingleGallery album={album} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </>
        )}

        <ArtistAlbumList />
      </>
    );
  }
}
