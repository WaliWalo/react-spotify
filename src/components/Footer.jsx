import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={10}>
              <Container id="footer">
                <div></div>
              </Container>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quos commodi voluptatum neque quidem repudiandae quis
              unde officia ut? Laboriosam inventore non explicabo asperiores
              quibusdam aliquid eaque quasi dicta a.
            </Col>
            <Col xs={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis dicta necessitatibus voluptatum eligendi obcaecati?
              Sint iste quisquam, voluptas voluptatum nobis voluptatibus
              laboriosam quam dolorum rem beatae aliquam maiores numquam
              officia?
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
