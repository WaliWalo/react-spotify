import React, { Component } from "react";
import { Table } from "react-bootstrap";
import SingleAlbumTrack from "./SingleAlbumTrack";

export default class AlbumTrackList extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tracks.map((track, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <SingleAlbumTrack track={track} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
