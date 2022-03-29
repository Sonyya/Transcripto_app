import React from "react";
import { Col, Row,Container, Image,Dropdown,DropdownMenu, DropdownToggle} from "react-bootstrap";
import BackgroundSlider from "../BackgroundSlider";
import background from "../../Images/bg/BleuFoncé.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  
  div {
    font-family: "Poppins";
    color: #fdf9ef;
    text-align: center;
    padding-top: 5%;
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

  textarea {
    width: 80%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: both;
  }
`;

const Text_preview = () => {
  return (
    <Styles>
      <div>

        <Row>
          <Col sm={2} md={2} lg={2}></Col>

          <Col sm={8} md={8} lg={8}>
            <textarea id="preview" name="preview" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sollicitudin dui. Pellentesque mi arcu, bibendum non leo ac, aliquam tempus dui. Morbi ultricies vestibulum nisi, vel tempor odio semper ut. 
Mauris consectetur ex a lectus ultrices, vitae cursus erat convallis. Sed tincidunt faucibus tortor, eget mollis lorem efficitur in. Cras eget urna sodales, accumsan quam in, auctor orci. In urna est, feugiat eu libero in, faucibus maximus tortor. Donec elementum dolor vitae ligula accumsan eleifend. 
Morbi tempor cursus quam. Maecenas eu tempus leo. Nam mauris ante, efficitur et rutrum et, vehicula eu justo. In fringilla turpis nec mi fermentum, rhoncus commodo enim laoreet. Donec quis quam arcu. Aenean laoreet sapien a odio elementum, a posuere ex aliquet. Sed luctus est et odio auctor venenatis commodo sit amet neque.

Suspendisse ullamcorper augue nec tellus placerat lacinia. Vivamus tempus augue augue, at dignissim ipsum tincidunt a. Phasellus faucibus, risus a fermentum iaculis, dui erat tempor nunc, vel imperdiet nisi purus sit amet enim. 
Nullam consectetur laoreet volutpat. Cras semper at nisl in eleifend. Morbi ante ex, lobortis eu consectetur nec, malesuada ut justo. Sed interdum ut tortor ac dapibus. Vestibulum aliquet odio non augue tempor cursus. Praesent nec sagittis est, sed facilisis leo.

Vivamus laoreet mollis mattis. Pellentesque euismod condimentum tellus sed tristique. Maecenas ultrices convallis blandit.
 Aenean semper porta erat, et viverra est lobortis id. Duis eget lacinia felis, quis tempor enim. Phasellus pretium facilisis arcu at dignissim. Nullam volutpat arcu massa,
 non luctus erat faucibus sed. Quisque euismod libero vitae arcu convallis interdum. Nullam mollis erat bibendum erat mattis vehicula. Pellentesque vel imperdiet leo, nec scelerisque mauris. Integer lectus nisi, vehicula in tincidunt eget, tincidunt vel diam.
 Sed eleifend risus sapien, eget dignissim dolor tincidunt vitae. Vivamus vestibulum mattis nisi, nec semper felis. Etiam pharetra fermentum ligula sed lobortis. Phasellus venenatis, eros ac eleifend venenatis, libero nunc luctus orci, sed hendrerit arcu mi id augue.

            </textarea>
          </Col>

          <Col sm={2} md={2} lg={2}></Col>
        </Row>

        <p>
        </p>

        <p  id="elt3">
           <Link to="/contact">Telecharger Fichier Texte</Link> 
        </p>
        
     
        <BackgroundSlider
          images={[background]}
          duration={1000}
        />
       
      </div>
    </Styles>
  );
};

export default Text_preview;
