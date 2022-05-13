import React, { useState, useRef } from 'react';
import { Container } from "react-bootstrap";
import ConcertsPage from './Events/ConcertsPage';

function Searchbar(props) {
  
    const searchQueryRef = useRef();
    const searchTypeRef = useRef();
   
  
  
  
  
    const onSubmit = (event) => {
      event.preventDefault();
        const searchData ={
          searchQuery: searchQueryRef.current.value,
          searchType: searchTypeRef.current.value
        }
      
  
      props.onSetSearchData(searchData);
 
  
    }




    return (


        <div>  <form className="searchbox" onSubmit={onSubmit}>
          <input type="text" ref={searchQueryRef}  />
          <select name="selectList" id="selectList" ref={searchTypeRef} >
            <option value="City Metro Area">City Metro Area</option>
            <option value="Venue">Venue</option>
            <option value="Artist">Artist</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
           
        </div>
    );
}

export default Searchbar;