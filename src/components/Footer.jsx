import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faRandom,
  faRedo,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={10}>
              <Container id="footerIcon">
                <FontAwesomeIcon icon={faRandom} />
                <FontAwesomeIcon icon={faStepBackward} />
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faStepForward} />
                <FontAwesomeIcon icon={faRedo} />
              </Container>
              <Container id="footerProgressBar">
                <div className="text-light">1:20</div>
                <div
                  className="progress m-2 bg-dark"
                  style={{ height: "5px", width: "300px" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="text-light">3:35</div>
              </Container>
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
