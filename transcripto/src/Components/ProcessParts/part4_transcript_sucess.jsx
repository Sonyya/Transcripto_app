import React from "react";
import transIcon from "../../Images/icons/Done.png";
import { Col, Row, Image,  Container} from "react-bootstrap";
import BackgroundSlider from "../BackgroundSlider";
import background from "../../Images/bg/BleuFoncé.png";
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

const TranscriptSucess = () => {
  return (
    <Styles>
      <div>

        <Row>
            <Col sm={2} md={2} lg={2}></Col>

            <Col sm={8} md={8} lg={8}>
                <h1>
                    Transcription Terminée
                </h1>

            </Col>

            <Col sm={2} md={2} lg={2}></Col>
            </Row>
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

            <Row>
        
            <Col sm={5} md={5} lg={5}>
            <Link to="/Text_preview">Apercu de la Transcription</Link> 
            </Col>

            <Col sm={2} md={2} lg={2}></Col>

            <Col sm={5} md={5} lg={5}>
            <Link to="/contact">Telecharger Fichier Texte</Link> 
            </Col>

            </Row>

            <BackgroundSlider
          images={[background]}
          duration={1000}
        />
      </div>
    </Styles>
  );
};

export default TranscriptSucess;
