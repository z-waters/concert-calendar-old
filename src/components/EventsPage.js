import React from "react";
import { Container } from "react-bootstrap";
import ConcertList from "./ConcertList";



function EventsPage() {
  return (
    <Container fluid className="concert-list">
      
      <Container className = "concert-list-content">
       
        <h1 className="project-heading">
          <strong className="blue">Events Header</strong>
        </h1>
       
        <ConcertList />

    
      </Container>
    </Container>
  );
}

export default EventsPage;