// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import StepSix from './components/StepSix';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="/step-two" element={<StepTwo />} />
        <Route path="/step-three" element={<StepThree />} />
        <Route path="/step-four" element={<StepFour />} />
        <Route path='/step-five' element={<StepFive />}/>
        <Route path='/step-six' element={<StepSix />}/>
      </Routes>
    </Router>
  );
};

export default App;
