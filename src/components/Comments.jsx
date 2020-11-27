import React, { Component } from "react";
import {
  Badge,
  Button,
  FormControl,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import { fetchCommentsById } from "../api/commentsApi";
import AddComment from "./AddComment";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      comments: [],
      loading: true,
      allComment: [], //allComment for search function to return to all comment after removing query
      modified: false,
    };
  }

  componentDidMount = async () => {
    let comments = await fetchCommentsById(this.props.albumId);
    this.setState({ comments: comments, loading: false });
  };

  async componentDidUpdate(prevProp, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.modified !== prevState.modified) {
      let comments = await fetchCommentsById(this.props.albumId);
      this.setState({ comments: comments, loading: false });
      this.setState({ modified: false });
    }
  }

  handleSearch = (query) => {
    if (query) {
      let filtered = this.state.comments.filter((comment) => {
        return comment.comment.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ comments: filtered });
    } else {
      this.setState({ modified: true });
    }
  };

  removeComment = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
          },
        }
      );
      this.setState({ loading: false });
      if (response.ok) {
        alert("Comment Deleted!");
        this.setState({ modified: true });
        // this.componentDidMount();
      }
    } catch (e) {
      console.log("error happened, that's life", e);
    }
  };

  handler() {
    this.setState({
      modified: true,
    });
  }
  render() {
    return (
      <>
        <div className="mb-5" style={{ width: "-webkit-fill-available" }}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => this.handleSearch(e.target.value)}
          />
          {this.state.loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            this.state.comments.map((comment, index) => {
              let variant;
              if (comment.rate >= 4) {
                variant = "success";
              } else if (comment.rate === 3) {
                variant = "warning";
              } else {
                variant = "danger";
              }
              return (
                <ListGroup key={index} style={{ color: "black" }}>
                  <ListGroup.Item>
                    <p>Comment: {comment.comment}</p>{" "}
                    <p>
                      Rating: <Badge variant={variant}>{comment.rate}</Badge>
                    </p>
                    <Button
                      onClick={() => {
                        this.removeComment(comment._id);
                      }}
                    >
                      Remove Comment
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              );
            })
          )}
        </div>

        <AddComment albumId={this.props.albumId} modify={this.handler} />
      </>
    );
  }
}
