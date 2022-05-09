import axios from "axios";

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


import React from "react";
import ConcertPaginatedList from "./ConcertPaginatedList";

let myData = { 
    concertList : [],
    totalEntries : 0,
    currentPage : 1
}
function SearchHandling(props) {
    const apiProp = {
        apikey: "m9qVXGhOvdZmmUQs",
        seattleEventId: '2846'
      };
    //axios.get('https://api.songkick.com/api/3.0/events.json?apikey=' + apiProp.apikey + '&location=sk:' + apiProp.seattleEventId) //Concerts by metro area "Seattle"
    axios.get('https://api.songkick.com/api/3.0/venues/3154/calendar.json?apikey=m9qVXGhOvdZmmUQs')//Concerts by venue "Shobox"
        .then(function (response) {
            var data = response.data;
            
            
    
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
        <ConcertPaginatedList data = {myData} />
    );

}
export default SearchHandling;