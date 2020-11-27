import React, { Component } from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import { submitComment } from "../api/commentsApi";

export default class AddComment extends Component {
  state = {
    comment: {
      rate: 1,
      comment: "",
      elementId: "",
    },
  };

  updateCommentField = (e) => {
    let comment = { ...this.state.comment }; // creating a copy of the current state
    let currentId = e.currentTarget.id;

    comment[currentId] = e.currentTarget.value; // e.currentTarget.value is the keystroke
    comment["elementId"] = this.props.albumId;
    this.setState({ comment: comment });
  };

  handleSubmit = async (e, call) => {
    e.preventDefault();
    call = this.props.modify;
    submitComment(this.state.comment);
    call();
    this.setState({
      comment: {
        comment: "",
        rate: 1,
        elementId: "",
      },
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Form.Label htmlFor="rate" style={{ color: "white" }}>
              Rating:{" "}
            </Form.Label>
            <Form.Control
              name="rate"
              id="rate"
              as="select"
              value={this.state.comment.rate}
              onChange={this.updateCommentField}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <FormLabel htmlFor="comment" style={{ color: "white" }}>
              Add Comment
            </FormLabel>
            <Form.Control
              name="comment"
              id="comment"
              as="textarea"
              rows={3}
              value={this.state.comment.comment}
              onChange={this.updateCommentField}
            />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
