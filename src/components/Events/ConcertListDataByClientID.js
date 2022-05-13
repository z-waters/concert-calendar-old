import axios from "axios";
import React, { useState, useEffect } from 'react';

import ConcertPaginatedList from "./ConcertPaginatedList";





let apiProp = {
  apikey: "m9qVXGhOvdZmmUQs",
  seattleEventId: '2846'
};




function ConcertListDataByClientID(props) {
  const [myData, setMyData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const returnData = {
    concertList: [],
    totalEntries: 0,
    currentPage: 1
  }
  
  useEffect(() => {
    setisLoaded(false);
    getUpcomingEventsByClientIP();
    console.log(myData);

  },[]);

  const getUpcomingEventsByClientIP = async () => {
    const data = {
      concertList: [],
      totalEntries: 0,
      currentPage: 1
    }
    const metroAreaData = await axios.get('https://api.songkick.com/api/3.0/search/locations.json?location=clientip&apikey=' + apiProp.apikey);
    const metroAreaID = metroAreaData.data.resultsPage.results.location[0].metroArea.id;
    const getData = await axios.get('https://api.songkick.com/api/3.0/metro_areas/' + metroAreaID + '/calendar.json?apikey=' + apiProp.apikey );
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
      console.log(data);
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
export default ConcertListDataByClientID;