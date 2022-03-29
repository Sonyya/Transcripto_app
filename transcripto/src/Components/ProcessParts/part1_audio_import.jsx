import React, {Component} from "react";
import transIcon from "../../Images/icons/import_file_icon.png";
import BackgroundSlider from "../BackgroundSlider"
import { Col, Row, Image} from "react-bootstrap";
import background from "../../Images/bg/BleuFoncé.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

const Styles = styled.div`
  
  div {
    font-family: "Poppins";
    color: #fdf9ef;
    text-align: center;
  }
  

  a,#importButton {
    background: coral;
    padding: 15px 35px;
    display: inline-block;
    margin-top: 15px;
    color: white;
    text-transform: uppercase;
    border-radius: 15px;
  }
  input
  {
    display: none;
  }
`;

class AudioImport extends Component{

  
  
  state = {
  
    // Initially, no file is selected
    selectedFile: null
  };

  // On file select (from the pop up)
  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
    console.log('File selectionne avec brio')

  };

  // On file upload (click the upload button)
  onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {

    if (this.state.selectedFile) {
      
      return (
        <div>
          <h2>File Details:</h2>
          
  <p>File Name: {this.state.selectedFile.name}</p>

          
  <p>File Type: {this.state.selectedFile.type}</p>

          
  <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

    render(){
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


            <p id="elt3">
              <Link to="/AudioConfirm">Importer fichier audio</Link> 
            {/*   <label class="btn btn-primary" id="importButton" onChange={this.onFileChange} >
                    Importer fichier audio
                  <input type="file"/>
                </label> */}
                  
            </p>
          
            <BackgroundSlider
              images={[background]}
              duration={1000}
            />
          </div>
      </Styles>
            );
          }

}

/* const Styles = styled.div`
  
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

state = {
 
  // Initially, no file is selected
  selectedFile: null
};

// On file select (from the pop up)
onFileChange = event => {

  // Update the state
  this.setState({ selectedFile: event.target.files[0] });

};

// On file upload (click the upload button)
onFileUpload = () => {

  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append(
    "myFile",
    this.state.selectedFile,
    this.state.selectedFile.name
  );

  // Details of the uploaded file
  console.log(this.state.selectedFile);

  // Request made to the backend api
  // Send formData object
  axios.post("api/uploadfile", formData);
};

// File content to be displayed after
// file upload is complete
fileData = () => {

  if (this.state.selectedFile) {
     
    return (
      <div>
        <h2>File Details:</h2>
         
<p>File Name: {this.state.selectedFile.name}</p>

         
<p>File Type: {this.state.selectedFile.type}</p>

         
<p>
          Last Modified:{" "}
          {this.state.selectedFile.lastModifiedDate.toDateString()}
        </p>

      </div>
    );
  } else {
    return (
      <div>
        <br />
        <h4>Choose before Pressing the Upload button</h4>
      </div>
    );
  }
};

const AudioImport = () => {
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
           <Link to="/AudioConfirm">Importer fichier audio</Link> 
        </p>
        <BackgroundSlider
          images={[background]}
          duration={1000}
        />
      </div>
    </Styles>
  );
}; */

export default AudioImport;
