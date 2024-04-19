// StepFive.js
import React, { useState } from 'react';
import Image2 from '../victory.jpg';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
const StepFive = ({ prevStep, nextStep }) => {
    const [loading, setLoading] = useState(false);
    const simulateLoading = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          // Proceed to the next step after loading
          console.log('Navigating to the next step...');
        }, 2000); // Simulated loading time: 2 seconds
      };
      const handleContinue = () => {
        // Simulate loading before proceeding to the next step
        simulateLoading();
      };


  return (
    <div className="container mx-auto">
      <Link to="../step-four" className="inline-block align-middle" >
        <FontAwesomeIcon icon={faCircleChevronLeft} className='ml-6 mt-4 w-7 h-auto' />
        </Link>
      {/* <h1 className="text-2xl font-bold mb-4">Step Three</h1> */}
      <div className="flex items-center">
        {/* Left side with picture */}
        <div className="w-1/2 p-20 flex justify-center items-center">
          <img src={Image2} alt="Your Picture" className="w-80 h-auto" />
        </div>
        {/* Right side with paragraph */}
        <div className="w-1/2">
        <div className="container mx-auto p-10 mt-12">
          <h1 className='text-2xl font-bold text-left ml-10 mb-2  '>You're on your way!</h1>
          <h2 className="ml-10 mb-20 mr-20 text-left">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</h2>
        </div>
          
        </div>
      </div>
      
      <div className="flex justify-center ">
        
        <Link to="/step-six"> {/* Adjust the path to the next step */}
          <button
            onClick={handleContinue}
            className="bg-black hover:bg-gray-700 text-white py-2 px-8 rounded"
          >
            Continue
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default StepFive;
