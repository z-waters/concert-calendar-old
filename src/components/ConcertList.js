import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PaginatedList } from "react-paginated-list";


var concerts = [];
var pages = 0;
var current_page = 1;
var total_entries = 0;

async function getConcerts() {


  let fetchQuery = 'https://api.songkick.com/api/3.0/events.json?apikey=m9qVXGhOvdZmmUQs&location=sk:2846';

  await fetch(fetchQuery, {
    //mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  })
    .then(response => {
      if (response.ok) {
        
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then(data => {
      console.log(data)
      data = JSON.parse(JSON.stringify(data));
      console.log(data['resultsPage']['results']['event'])
      concerts = data['resultsPage']['results']['event'];
      total_entries = data['resultsPage']['totalEntries']; 
      pages = Math.round(total_entries/ 50);
      current_page = data['resultsPage']['page'];
      console.log(pages);
  })
  .catch(e => console.log(e));

  return true;
}



function ConcertList() {
  getConcerts();
  
  return (
    
      <PaginatedList
        list={concerts}
        itemsPerPage={50}
        currentPage={current_page}
        displayRange={7}
        renderList={(list, displayRange) => (
          <>
            {list.map((item, id) => {
              
              return (
               
                <div  key={id} className="list-group-item" id="list-item"> <div><p>{displayRange}</p></div>
                <Row>
                  <Col md="4">
                    {item.displayName}
                  </Col>
                  <Col md="4">
                    {item.location['city']}
                  </Col>
                  <Col md="4">
                    {item.type}
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
