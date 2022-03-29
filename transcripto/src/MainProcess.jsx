// MainForm.jsx
import React, { Component } from "react";
import AudioImport from "./Components/ProcessParts/part1_audio_import";
import AudioConfirm from "./Components/ProcessParts/part2_audio_confirmation";
import TranscriptLoading from "./Components/ProcessParts/part3_transcript_loading";
import TranscriptSucess from "./Components/ProcessParts/part4_transcript_sucess";
import Text_preview from "./Components/ProcessParts/part5_text_preview";
import ErrorPage from "./ErrorPage";
//import "../CSS/form.css";

class MainProcess extends Component {
  state = {
    step: 1,
    langue: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  particularStep = (stepnum) => {
    this.setState({
      step: stepnum,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      langue,
    } = this.state;

    const values = {
     langue,
    };
    switch (step) {
      case 1:
        return (
          <AudioImport
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <AudioConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <TranscriptLoading
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <TranscriptSucess
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Text_preview
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      default:
        return <ErrorPage />;
    }
  }
}

export default MainProcess;
