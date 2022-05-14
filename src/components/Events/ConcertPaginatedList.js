import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function ConcertPaginatedList(props) {

  const list = props.data.concertList;

  const currentPage = props.data.currentPage;
  const numberOfPages = Math.ceil(props.data.totalEntries / 50);
  console.log("number of pages: " + numberOfPages);


if(list.length == 0){
  return (

    <div>
      <Container fluid className="concert-list">
        <Container className="concert-list-content">
          <h1> No data was found</h1>
        </Container>
      </Container>
    </div>
  );

}else{
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


       
      {list.map((item) => {

        return (

          <li href="#" className="list-group-item list-group-item-action" id="list-item">
            <Row>
              <Col md="3">
                {item.displayName.split(" (")[0]}
              </Col>
              <Col md="2">
                {item.location['city'].substring(0, item.location['city'].length - 4)}
              </Col>
              <Col md="1">
                {new Date(item.start.datetime).toLocaleDateString()}
              </Col>
              <Col md="1">
                {item.start.time}
              </Col>
              <Col md="3">
                {item.venue.displayName}
              </Col>
              <Col md="2">
                {item.performance}
              </Col>

            </Row>
          </li>
        );
      })} 
      </Container>
      </Container>
    </div>
  );

}
}
export default ConcertPaginatedList;


