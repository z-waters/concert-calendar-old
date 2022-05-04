import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConcertList from "./ConcertList";
import ConcertPaginatedList from "./ConcertPaginatedList";

import { FetchTest } from "./FetchData";
import axios from "axios";

  let myData = { 
  concertList : [],
  totalEntries : 0,
  currentPage : 1
}


function EventsPage(props) {
  const apiProp = {
    apikey: "m9qVXGhOvdZmmUQs",
    seattleEventId: '2846'
  };
 

    axios.get('https://api.songkick.com/api/3.0/events.json?apikey=' + apiProp.apikey + '&location=sk:' + apiProp.seattleEventId)
      .then(function (response) {

        var data = response.data;
        console.log(data);

        myData.concertList = data.resultsPage.results.event;
        myData.totalEntries = data.resultsPage.totalEntries;
        myData.currentPage = data.resultsPage.page;

        myData.concertList.forEach(item => {
          if (item.start.time == null) {
            item.start.datetime = item.start.date;
            item.start.time = "N/A";
          } else {
            //formating time
            item.start.time = new Date(item.start.datetime).toLocaleTimeString();
            var splitTime = item.start.time.split(":");
            item.start.time = splitTime[0] + ":" + splitTime[1] + splitTime[2].substring(2, splitTime[2].length);
          }
          var temp = "";
          item.performance.forEach(performer => {
            temp += performer.displayName;
            if (item.performance.indexOf(performer) < item.performance.length - 1) {
              temp += ", ";
            }
          });
          item.performance = temp;
        });
    
      })
      .catch(function (error) {
        console.log(error);
      })



 

  return (
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
     
        {/* <ConcertList data = {myData} /> */}
        <ConcertPaginatedList data = {myData} />
      </Container>
    </Container>
  );



}

export default EventsPage;