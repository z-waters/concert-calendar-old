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
                    Event
                  </Col>
                  <Col md="2">
                    Location
                  </Col>
                  <Col md="1">
                    Date
                  </Col>
                  <Col md="1">
                    Time
                  </Col>
                  <Col md="3">
                    Venue
                  </Col>
                  <Col md="2">
                    Scheduled Performers
                  </Col>
                
                </Row>
                </div>

        <ConcertList />
        
      </Container>
    </Container>
  );
}

export default EventsPage;