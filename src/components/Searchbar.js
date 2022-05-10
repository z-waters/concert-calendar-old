import React, { useState, useEffect } from 'react';
import { Container} from "react-bootstrap";

function Searchbar(props)  {
    const [searchQuery, setSearchQuery] = useState('');


    


    return (


        <div>
            <Container fluid className="concert-page">
                <form className="searchbox">
                    <input type="text" /><button style={{  float: "right"}}> Click</button>
                    
                </form>
                

            </Container>

            
        </div>
    );
}

export default Searchbar;