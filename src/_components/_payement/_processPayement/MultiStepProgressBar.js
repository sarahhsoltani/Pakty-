import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";

export const MultiStepProgressBar = (props) => {
  return (
    <div>
      <div className="container">
        <div>
          <p className="back"><i class="fa-solid fa-arrow-left pe-1"></i>Back</p>
        </div>
      <ProgressBar  className="mx-5"
        percent={((props.step - 1) * 100) / 2}
        filledBackground="#11F4BD"
      >
        <Step transition="scale" >
          {({ accomplished, index }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              
            </div>
          )}
        </Step>
        
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              
            </div>
          )}
        </Step>
       
      </ProgressBar>
      <div className="container mt-1">
            <div className="d-flex justify-content-around">
                <div ><p  className="step_Process_Para">Import your photos</p></div>
                <div className="me-2" ><p className="step_Process_Para">add your info</p></div>
                <div className="me-2"><p className="step_Process_Para">Paymenent</p></div>
            </div>
        </div>
      </div>

        <div className="p-0">
            <p className="para-one">Send us many photo as you can of your room</p>
            <p className="para-two">Lorem ipsum dolor sit amet consectetur. Ullamcorper sed turpis sapien id mi id venenatis in id. Pretium massa amet sapien turpis quam turpis. Sit sed malesuada velit adipiscing urna pretium magna. Sit quis at diam et sed at eu. Sed non ut elit amet proin. Ullamcorper purus viverra odio a luctus. Lectus fringilla sed scelerisque in et dolor dictumst molestie. Quam nunc dolor pellentesque viverra nulla quam proin. Dignissim.</p>
        </div>
        </div>
  )
};
