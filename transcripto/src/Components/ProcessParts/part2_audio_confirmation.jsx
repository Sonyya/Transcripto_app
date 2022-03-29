import React from "react";
import transIcon from "../../Images/icons/file_import_done.png";
import background from "../../Images/bg/BleuFoncé.png"
import { Col, Row, Image,Dropdown,DropdownMenu, DropdownToggle} from "react-bootstrap";
import BackgroundSlider from "../BackgroundSlider";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  
  div {
    font-family: "Poppins";
    color: #fdf9ef;
    text-align: center;
    
  }
 

  a {
    background: coral;
    padding: 15px 35px;
    display: inline-block;
    margin-top: 15px;
    color: white;
    text-transform: uppercase;
    border-radius: 15px;
  }
`;

const AudioConfirm = () => {
  return (
    <Styles>
      <div>
        <Row>
          <Col sm={2} md={2} lg={2}></Col>

          <Col sm={8} md={8} lg={8}>
            <Image
              src={transIcon}
              fluid
            />
          </Col>

          <Col sm={2} md={2} lg={2}></Col>
        </Row>

        <p>
        </p>

        <p id="elt3">
           <Link to="/TranscriptSucess">Lancer La Transcription</Link> 
        </p>
        <BackgroundSlider
          images={[background]}
          duration={1000}
        />
      </div>
    </Styles>
  );
};

export default AudioConfirm;
