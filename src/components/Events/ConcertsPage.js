
import { Container, Row, Col } from "react-bootstrap";
import SearchHandling from "./SearchHandling";
import Footer from "../Footer";
import Searchbar from "../Searchbar";
import ConcertPaginatedList from "./ConcertPaginatedList";
import React, { useState, useRef } from 'react';
import ConcertListDataByClientID from "./ConcertListDataByClientID";
import { unmountComponentAtNode, render } from "react-dom";

function ConcertsPage() {
 
  const searchQueryRef = useRef();
  const searchTypeRef = useRef();
 const searchData ={
        searchQuery: "",
        searchType: "City Metro Area"
      }


    
    
    
  const onSubmit = (event) => {
    event.preventDefault();
     
    searchData.searchQuery = searchQueryRef.current.value;
    searchData.searchType = searchTypeRef.current.value;
     console.log(searchData.searchType + ": " + searchData.searchQuery);
  }


  return (
    <div>
      <Container fluid className="concert-page">
      <form className="searchbox" onSubmit={onSubmit}>
          <input type="text" ref={searchQueryRef}  />
          <select name="selectList" id="selectList" ref={searchTypeRef} >
            <option value="City Metro Area">City Metro Area</option>
            <option value="Venue">Venue</option>
            <option value="Artist">Artist</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <Container className="concert-list">
          <SearchHandling searchQuery={searchData.searchQuery} searchType={searchData.searchType} />
        </Container>
      </Container>
      <Footer />
    </div>
  );



} export default ConcertsPage;

// function ConcertsPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchType, setSearchType] = useState("City Metro Area");

//   const setSearchData = (enteredSearchData) => {

//     const searchData = {
//       ...enteredSearchData
//     }
//     setSearchQuery(searchData.searchQuery);
//     setSearchType(searchData.searchType);
//     console.log(searchType + ": " + searchQuery);
//   }


//   return (
//     <div>
//       <Container fluid className="concert-page">
//         <Searchbar onSetSearchData={setSearchData} />
//         <Container className="concert-list">
//           <SearchHandling searchQuery={searchQuery} searchType={searchType} />
//         </Container>
//       </Container>
//       <Footer />
//     </div>
//   );



// } export default ConcertsPage;