import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchHandling from "./SearchHandling";
import Footer from "../Footer";

function ConcertsPage(props) {

  return (
    <div>
    <Container fluid className="concert-list">
      <Container className="concert-list-content">

        <div className="list-group-item" id="list-item">
          <Row>
            <Col md="3">
              <strong>Event</strong>
            </Col>
            <Col md="2">
              <strong>Location</strong>
            </Col>
            <Col md="1">
              <strong>Date</strong>
            </Col>
            <Col md="1">
              <strong>Time</strong>
            </Col>
            <Col md="3">
              <strong>Venue</strong>
            </Col>
            <Col md="2">
              <strong>Scheduled Performers</strong>
            </Col>

          </Row>
        </div>
     
        
        <SearchHandling  />
      </Container>
    </Container>
    <Footer />
    </div>
  );



}

export default ConcertsPage;