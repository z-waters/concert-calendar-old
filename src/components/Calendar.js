import React from "react";
import { Container } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import Footer from "./Footer";

function handleDateClick(arg) {// bind with an arrow function
  alert(arg.dateStr)
}
function Calendar() {
  return (
    <div>
      <Container fluid className="calendar-page">

        <Container className="calendar-content">

          <h1 className="project-heading">
            <strong className="blue">Calendar Header</strong>
          </h1>

          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={handleDateClick}
          />

        </Container>

      </Container>
      <Footer />
    </div>
  );
}
export default Calendar;