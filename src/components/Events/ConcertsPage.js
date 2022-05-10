import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchHandling from "./SearchHandling";
import Footer from "../Footer";
import Searchbar from "../Searchbar";
import ConcertPaginatedList from "./ConcertPaginatedList";

function ConcertsPage() {


  return (
    <div>
      
      <SearchHandling />
      <Footer />
    </div>
  );



}

export default ConcertsPage;