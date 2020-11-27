import React, { Component } from "react";
import AlbumTrackList from "./AlbumTrackList";
import { fetchAlbumById } from "../api/deezerApi";
import "./css/album.css";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Comments from "./Comments";

export default class Album extends Component {
  state = {
    albumId: this.props.match.params.id,
    albumDetail: {},
    loading: true,
  };
  componentDidMount = async () => {
    const albumDetail = await fetchAlbumById(this.state.albumId);
    this.setState({
      albumDetail: albumDetail,
      loading: false,
    });
  };
  render() {
    return (
      <div>
        <Container>
          {this.state.loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Row>
              <Col id="albumDetails">
                <Image
                  src={this.state.albumDetail.cover_medium}
                  rounded
                ></Image>
                <h2>{this.state.albumDetail.title}</h2>

                <p
                  onClick={() =>
                    this.props.history.push(
                      "/artist/" + this.state.albumDetail.artist.id
                    )
                  }
                >
                  {this.state.albumDetail.artist.name}
                </p>
                <Button variant="success">Play</Button>
                <p>
                  {this.state.albumDetail.release_date.slice(0, 4)}.
                  {this.state.albumDetail.tracks.data.length} songs
                </p>
                <Comments albumId={this.state.albumId} />
              </Col>
              <Col>
                <AlbumTrackList tracks={this.state.albumDetail.tracks.data} />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }
}
