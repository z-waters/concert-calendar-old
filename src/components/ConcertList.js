import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PaginatedList } from "react-paginated-list";
import axios from "axios";

var concerts = [];
var pages = 0;
var current_page = 1;
var total_entries = 0;


async function fetchTest(apikey, venueId) {
  axios.get('https://api.songkick.com/api/3.0/events.json?apikey=' + apikey + '&location=sk:' + venueId)
    .then(function (response) {
      var data = response.data;

      console.log(data);
      concerts = data.resultsPage.results.event;

      concerts.forEach(item => {
        if (item.start.time == null) {
          item.start.time = "N/A";
        }
        var temp = ""
        item.performance.forEach(performer => {
          temp += performer.displayName;
          if (item.performance.indexOf(performer) < item.performance.length - 1) {
            temp += ", ";
          }
        });
        item.performance = temp;
      });
      total_entries = data.resultsPage.totalEntries;
      pages = Math.round(total_entries / 50);
      current_page = data.resultsPage.page;
      console.log(concerts);
    })
    .catch(function (error) {
      console.log(error);
    })
}
function timeCheck(timeString) {
  if (timeString != null) {
    return new Date(item.start.datetime).toLocaleTimeString();
  } else {
    return "N/A";
  }
}

function ConcertList() {
  var apikey = "m9qVXGhOvdZmmUQs";
  var seattleEventId = '2846';
  fetchTest(apikey, seattleEventId);


  return (
   
      <PaginatedList
        list={concerts}
        itemsPerPage={50}
        currentPage={current_page}
        displayRange={7}
        renderList={(list) => (
          <>
            {list.map((item, id) => {

              return (

                <div key={id} className="list-group-item" id="list-item">
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
                      {new Date(item.start.datetime).toLocaleTimeString()}
                    </Col>
                    <Col md="3">
                      {item.venue.displayName}
                    </Col>
                    <Col md="2">
                      {item.performance}
                    </Col>

                  </Row>
                </div>
              );
            })}
          </>
        )}
      />




  );
}

export default ConcertList;



 //metroarea id by name 
//https://api.songkick.com/api/3.0/search/locations.json?query={input}&apikey=m9qVXGhOvdZmmUQs

///upcoming events by artist name
//https://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey={your_api_key}

//event details 
//https://api.songkick.com/api/3.0/events/{event_id}.json?apikey={your_api_key}

//metroarea upcoming events
//https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}

//get venue id by name
//https://api.songkick.com/api/3.0/search/venues.json?query={venue_name}&apikey={your_api_key}

//upcoming events by venue
//https://api.songkick.com/api/3.0/venues/{venue_id}/calendar.json?apikey={your_api_key}

// ageRestriction
// displayName
// flaggedAsEnded
// id
// location{city,long,lat}
// performance[]
// start{data, datetime,time}
// popularity
// venue{id,displayName}
//let fetchQuery = 'https://api.songkick.com/api/3.0/events.json?apikey=m9qVXGhOvdZmmUQs&location=sk:2846';



