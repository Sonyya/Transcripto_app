import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import logo from './logo.svg';
import Home from './Home';
import NavigationBar from "./Components/Navbar";
import AudioImport from "./Components/ProcessParts/part1_audio_import";
//import TranscriptSucess from "./Components/ProcessParts/part5_text_preview";
import styled from "styled-components";
import background from "./Images/bg/BleuFoncé.png";
import ErrorPage from "./ErrorPage";
import AudioConfirm from "./Components/ProcessParts/part2_audio_confirmation";
import TranscriptLoading from "./Components/ProcessParts/part3_transcript_loading";
import TranscriptSucess from "./Components/ProcessParts/part4_transcript_sucess";
import Text_preview from "./Components/ProcessParts/part5_text_preview";
import UploadEssaie from "./Essaie_upload";
import './App.css';


const Styles = styled.div`

  // background-image: url(${background});
  // background-size: contain, cover;
  div{
    padding-top: 1.5%;
  }
  

`;
class App extends Component {
  
  render() {
    return (
      <Styles>
      {/* create routes for the different website's pages */}
      <React.Fragment>
        <Router>
       
          <NavigationBar />
          <div></div>
          {/*<Jumbotron />*/}
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/AudioImport" element={<AudioImport/>} />
              <Route exact path="/AudioConfirm" element={<AudioConfirm/>} />
              <Route exact path="/TranscriptLoading" element={<TranscriptLoading/>}/>
              <Route exact path="/TranscriptSucess" element={<TranscriptSucess/>}/>
              <Route exact path="/Text_preview" element={<Text_preview/>}/>
              <Route exact path="/UploadEssaie" element={<UploadEssaie/>}/>
            </Routes>
          </Layout>
         
        </Router>
      </React.Fragment>
      </Styles>
    );
  }
}

export default App;
