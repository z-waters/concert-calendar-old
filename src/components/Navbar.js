import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { withAuthenticator } from '@aws-amplify/ui-react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { GiMusicalNotes } from "react-icons/gi";
import { BsCalendar2Range, BsCalendar2RangeFill, BsMusicNoteList } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";


import { CgFileDocument } from "react-icons/cg";
import Amplify, { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


function NavBar({ signOut, user }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <GiMusicalNotes style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/calendar"
                onClick={() => updateExpanded(false)}
              >
                <BsCalendar2RangeFill style={{ marginBottom: "2px" }} /> Calendar
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/events"
                onClick={() => updateExpanded(false)}
              >
                <BsMusicNoteList style={{marginBottom: "2px" }} /> Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
             
              <Nav.Link
                as={Link}
                to="#"
                onClick={signOut}
              >
                <RiLogoutBoxRLine style={{ marginBottom: "2px" }} /> Sign out
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withAuthenticator(NavBar);
