import React from "react";
import { Container } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

function handleDateClick(arg){// bind with an arrow function
  alert(arg.dateStr)
}
function Calendar() {
  return (
    <Container fluid className="about-section">
      
      <Container>
       
        <h1 className="project-heading">
          <strong className="blue">Calendar Header</strong>
        </h1>
        <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={handleDateClick}
        />
      


      

    
      </Container>
    </Container>
  );
}


export default Calendar;