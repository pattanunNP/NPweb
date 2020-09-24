import Navigation from "./components/Navigation";
import dynamic from "next/dynamic";
import { Slide } from "react-slideshow-image";
import Images from "./components/ImageList";
import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import AOS from "aos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#222831",
  },
}));
function getSteps() {
  return ["2018", "2019", "2020"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    case 3:
      return `Try out different ad text to see what brings in the most customers,
            and learn how to enhance your ads using features like ad extensions.
            If you run into any problems with your ads, find out how to tell if
            they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function Index() {
  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 50,
      once: false,
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false
    );
  });
  return (
    <div className="container">
      <Navigation />
      <section id="#Top" display="flex">
        <div style={{ height: "40vh" }}>
          <img src="https://res.cloudinary.com/image-chatbot/image/upload/v1600952659/Portfolio/119211670_1965381476931711_3753328336450563952_o_mcq99o.jpg" />
        </div>
      </section>
      <section id="#profile">
        <div display="flex" justifyContent="flex-end">
          <Typography style={{ position: "flex", color: "white", zIndex: "2" }}>
            <h1 style={{ fontSize: "80px" }}>Hello, I am Pattanan Numpong</h1>
          </Typography>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <img
              src="https://res.cloudinary.com/image-chatbot/image/upload/v1600966760/118256440_1949323301870862_8566844396165459008_n-removebg_yx2l1g.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="#Timeline">
        <div>
          <Stepper orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>{getStepContent(index)}</StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
      </section>
    </div>
  );
}
