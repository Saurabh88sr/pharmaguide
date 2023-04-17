import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import News from "./News";
// import { elements } from "chart.js";

export class Newsbar extends Component {
  render() {
    return (
      <div className="bg-light p-3">
        <h4 className="board">To News Headline</h4>
        <Container>
          <Row>
          {/* {this.state.articals.map{(element)=> {console.log(element)}}} */}

            <Col >
              <News />
            </Col>
            <Col>
              <News />
            </Col>
            <Col>
              <News />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Newsbar;
