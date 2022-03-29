import React from "react";
import BackgroundSlider from "./Components/BackgroundSlider";
import transIcon from "./Images/icons/speech_to_text.png"
import { Col, Row, Image,Dropdown,DropdownMenu, DropdownToggle} from "react-bootstrap";
import styled from "styled-components";
import image1 from "./Images/bg/BleuFoncé.png";
import image2 from "./Images/bg/Bleuflash.png";
import image3 from "./Images/bg/Violet.png";
import MainProcess from "./MainProcess";
import { Link } from "react-router-dom";
import "./CSS/animate.css";

const Styles = styled.div`
  #elt1 {
    animation-delay: 2s;
    font-size: 50px;
    text-transform: uppercase;
    font-weight: bold;
  }

  #elt2 {
    animation-delay: 3s;
  }

  #elt3 {
    animation-delay: 3.25s;
  }
  #elt4 {
    animation-delay: 1s;
  }

  div {
    font-family: "Rambla";
    color: #fdf9ef;
    text-align: center;
  }
  span {
    color: coral;
  }

  #dropdown-basic {
    background: coral;
    padding: 15px 35px;
    display: inline-block;
    margin-top: 15px;
    color: white;
    text-transform: uppercase;
    border-radius: 15px;
  }
`;

const Home = () => {
  return (
    <Styles>
      <div>
        <Row>
          <Col sm={2} md={2} lg={2}></Col>

          <Col sm={8} md={8} lg={8}>
            <Image
              className="animated bounceInLeft"
              id="elt4"
              src={transIcon}
              fluid
            />
          </Col>

          <Col sm={2} md={2} lg={2}></Col>
        </Row>

        <h2 className="animated bounceInRight" id="elt1">
          AUDIO À <span> TEXTE </span>
        </h2>
        <p className="animated bounceInRight" id="elt3">
          {/* <Link to="/contact">Transcrire audio</Link> */}
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Transcrire audio
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/UploadEssaie" id="francais">Francais</Dropdown.Item>
                <Dropdown.Item href="/AudioImport " id="anglais" >Anglais</Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>



        </p>
        <BackgroundSlider
          images={[image1, image2, image3]}
          duration={5}
          transition={2}
        />
      </div>
    </Styles>
  );
};

export default Home;
