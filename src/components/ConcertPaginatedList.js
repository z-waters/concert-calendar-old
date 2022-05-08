import React, { Container, useState, useEffect } from 'react';
import axios from "axios";
import { PaginatedList } from "react-paginated-list";
import { Row, Col } from "react-bootstrap";

function ConcertPaginatedList(props) {


    console.log("DATA PASSES \n" + props.data);
    var list= props.data.concertList;
  return (
   
        
       <div>
            {list.map((item) => {

              return (

                <li href="#" className="list-group-item list-group-item-action"  id="list-item">
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
        </div>
        
      




  );





}
export default ConcertPaginatedList;


