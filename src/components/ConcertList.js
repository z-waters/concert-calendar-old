import React from "react";
import { Container, Row } from "react-bootstrap";
import { PaginatedList } from "react-paginated-list";


let concerts = [];
let pages = 0;
let currentconcertpage = 1;
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
        console.log(response);
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then(data => {
      console.log(data)
      data = JSON.parse(JSON.stringify(data));
      console.log(data['resultsPage']['results']['event'])
      concerts = data['resultsPage']['results']['event'];
      pages = data['resultsPage']['totalEntries'] / 50;
      currentconcertpage = data['resultsPage']['page'];
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
        renderList={(list) => (
          <>
            {list.map((item, id) => {
              if(list.length == 0){
                return ( <div>
                  <strong>No Data</strong>
                </div>)
              }
              return (
                <div key={id}>
                  {item.displayName}<br />
                  {item.location['city']}<br />
                  
                </div>
                
              );
            })}
          </>
        )}
      />


    


  );
}

export default ConcertList;
