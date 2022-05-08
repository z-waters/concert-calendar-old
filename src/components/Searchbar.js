import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { MDBCol, MDBIcon} from "mdbreact";

const Searchbar = () => {
    return (
    
        
        <MDBCol md="6">
        
         
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        
        </MDBCol>
      );
}

export default Searchbar;