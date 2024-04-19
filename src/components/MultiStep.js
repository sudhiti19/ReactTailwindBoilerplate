// MultiStepForm.js
import React, { useState } from 'react';
import { BrowserRouter as  Route,  Routes, useNavigate } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from  './StepSix';
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      navigate(`/step-${step - 1}`); // navigate to the previous step
    }
  };
  return (
    <Routes>
      <Route path="/step-one" element={<StepOne />} ></Route>
      <Route path="/step-two" element={<StepTwo prevStep={prevStep} />} ></Route>
      <Route path="/step-three" element={<StepThree prevStep={prevStep}/>} ></Route>
      <Route path="/step-four" element={<StepFour prevStep={prevStep}/>} ></Route>
      <Route path="/step-five" element={<StepFive prevStep={prevStep}/>}></Route>
      <Route path="/step-six" element={<StepSix prevStep={prevStep}/>}></Route>
    </Routes>
  );
   
 

  
};

export default MultiStepForm;
