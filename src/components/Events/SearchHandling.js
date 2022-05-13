import axios from "axios";
import React, { useState, useEffect } from 'react';

/*
upcoming events by artist name
https://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey={your_api_key}
id
displayName
uri
*/


/*
Get venue id by name
https://api.songkick.com/api/3.0/search/venues.json?query={venue_name}&apikey={your_api_key}
id
displayName
city{displayName,country}
description
uri

upcoming events by venue
https://api.songkick.com/api/3.0/venues/{venue_id}/calendar.json?apikey={your_api_key}
*/

/*
Event Details
fetchQuery = https://api.songkick.com/api/3.0/events/{event_id}.json?apikey={your_api_key}
ageRestriction
displayName
flaggedAsEnded
id
location{city,long,lat}
performance[]
start{data, datetime,time}
popularity
venue{id,displayName}
*/
/*
metroarea id by name 
https://api.songkick.com/api/3.0/search/locations.json?query={input}&apikey=m9qVXGhOvdZmmUQs
city{displayName,country} 
metroArea{id uri}


metroarea upcoming events
https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}
let fetchQuery = 'https://api.songkick.com/api/3.0/events.json?apikey=m9qVXGhOvdZmmUQs&location=sk:2846';
*/

/*
https://api.songkick.com/api/3.0/search/locations.json?location=clientip&apikey=m9qVXGhOvdZmmUQs
location{metroArea{country{displayName}, uri, state{displayName}, displayName, id}}
*/

import ConcertPaginatedList from "./ConcertPaginatedList";


let returnData = {
  concertList: [],
  totalEntries: 0,
  currentPage: 1
}


let apiProp = {
  apikey: "m9qVXGhOvdZmmUQs",
  seattleEventId: '2846'
};





function SearchHandling(props) {
  const localProps = {
  ...props
}
  const [myData, setMyData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  //axios.get('https://api.songkick.com/api/3.0/events.json?apikey=' + apiProp.apikey + '&location=sk:' + apiProp.seattleEventId) //Concerts by metro area "Seattle"
  useEffect(() => {
    setisLoaded(false);
    getUpcomingEventsByClientIP();
    console.log(myData);
    console.log(localProps);

  }, []);

  const getUpcomingEventsByClientIP = async () => {
    const data = {
      concertList: [],
      totalEntries: 0,
      currentPage: 1
    }
    var getData;

    if (localProps.searchQuery == '') {

      const metroAreaData = await axios.get('https://api.songkick.com/api/3.0/search/locations.json?location=clientip&apikey=' + apiProp.apikey);
      const metroAreaID = metroAreaData.data.resultsPage.results.location[0].metroArea.id;
      getData = await axios.get('https://api.songkick.com/api/3.0/metro_areas/' + metroAreaID + '/calendar.json?apikey=' + apiProp.apikey );
    
    } else {

      switch (localProps.searchType) {

        case "City Metro Area":
          const metroAreaData = await axios.get('https://api.songkick.com/api/3.0/search/locations.json?query=' + props.searchQuery + '&apikey=' + apiProp.apikey);
          const metroAreaResponse = metroAreaData.data.resultsPage.results;
          if(metroAreaResponse.length < 1 ){
            break;
          } 
          const metroAreaID = metroAreaResponse.location[0].metroArea.id;
          getData = await axios.get('https://api.songkick.com/api/3.0/metro_areas/' + metroAreaID + '/calendar.json?apikey=' + apiProp.apikey);

        case "Venue":
          const venueData = await axios.get('https://api.songkick.com/api/3.0/search/venues.json?query=' + props.searchQuery + '&apikey=' + apiProp.apikey);
          const venueDataResponse = venueData.data.resultsPage.results;
          if(venueDataResponse.length < 1 ){
            break;
          } 
          const venueID = venueDataResponse.venue[0].id;
          getData = await axios.get('https://api.songkick.com/api/3.0/metro_areas/' + venueID + '/calendar.json?apikey=' + apiProp.apikey);

        case "Artist":
          const artistData = await axios.get('https://api.songkick.com/api/3.0/search/artists.json?query=' + props.searchQuery + '&apikey=' + apiProp.apikey);
          const artistDataResponse = artistData.data.resultsPage.results;
          if(artistDataResponse.length < 1 ){
            break;
          } 
          const artistID = artistDataResponse.artist[0].id;
          getData = await axios.get('https://api.songkick.com/api/3.0/metro_areas/' + artistID + '/calendar.json?apikey=' + apiProp.apikey);

        default:

          console.error("How did you get here?");
      }
    }

    data.concertList = getData.data.resultsPage.results.event;
    data.totalEntries = getData.data.resultsPage.totalEntries;
    data.currentPage = getData.data.resultsPage.page;
    data.concertList.forEach(item => {
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
    }


    );
    if (getData != null) {
      setMyData(data);
      setisLoaded(true);
      
    }




  }



  if (!isLoaded) {
    return (
      <ConcertPaginatedList data={returnData} />
    );
  }
  return (
    <ConcertPaginatedList data={myData} />
  );
}
export default SearchHandling;