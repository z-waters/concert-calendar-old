import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ConcertList from "./ConcertList";



function EventsPage() {
  return (
    <Container fluid className="concert-list">
      <Container className = "concert-list-content">
       <Container className="list-item">    
       </Container>

        <h1 className="project-heading">
          <strong className="blue">Events Header</strong>
        </h1>

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

        <ConcertList />
        
      </Container>
    </Container>
  );
}

export default EventsPage;