// import axios from "axios";
// import { React, useState, useEffect, useRef } from "react";

// let listItemData = { concerts: [], currentPage: 0, totalEntries: 0 }

// export class FetchTest extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {apikey: props.apikey, venueId: props.venueId}

//     }
//     fetchTest() {
//         axios.get('https://api.songkick.com/api/3.0/events.json?apikey=' + this.state.apikey + '&location=sk:' + this.state.venueId)
//             .then(function (response) {
//                 var data = response.data;

//                 console.log(data);
//                 listItemData.concerts = data.resultsPage.results.event;

//                 listItemData.concerts.forEach(item => {
//                     if (item.start.time == null) {
//                         item.start.datetime = item.start.date;
//                         item.start.time = "N/A";
//                     } else {
//                         //formating time
//                         item.start.time = new Date(item.start.datetime).toLocaleTimeString();
//                         var splitTime = item.start.time.split(":");
//                         item.start.time = splitTime[0] + ":" + splitTime[1] + splitTime[2].substring(2, splitTime[2].length);
//                     }
//                     var temp = "";
//                     item.performance.forEach(performer => {
//                         temp += performer.displayName;
//                         if (item.performance.indexOf(performer) < item.performance.length - 1) {
//                             temp += ", ";
//                         }
//                     });
//                     item.performance = temp;
//                 });
//                 listItemData.totalEntries = data.resultsPage.totalEntries;
//                 listItemData.currentPage = data.resultsPage.page;
//                 return listItemData;
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }
// }