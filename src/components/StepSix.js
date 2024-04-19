// StepFour.js
import React from 'react';
import Math from "../math.jpg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
const StepSix = ({ prevStep, nextStep }) => {
    
    
    return (
      <div className="container mx-auto">
        <Link to="../step-five" className="inline-block align-middle" >
        <FontAwesomeIcon icon={faCircleChevronLeft} className='ml-6 mt-4 w-7 h-auto' />
        </Link>
        <h1 className="text-2xl font-bold mt-4  text-center">Learning paths based on your answers</h1>
      <h2 className="text-center mt-3 mb-5 text-gray-700">Choose one to get started. You can switch any time</h2>
        <div className="flex justify-center mt-8 p-6">
          
          <button className="flex border p-6 rounded ml-20 mx-2 mb-5 items-center">
    <div className="flex-1 overflow-hidden">
      <p className='text-left font-bold'>Foundational Math</p>
      <p className='text-left '>Build foundational skills in algebra, geometry, and probability.</p>
    </div>
    <img src={Math} alt="Image" className="w-32 h-auto ml-4" /> 
  </button>

  <button className="flex border p-6 rounded mx-2 mr-20 mb-5 items-center">
    <div className="flex-1 overflow-hidden">
      <p className='text-left font-bold'>Mathematical Thinking</p>
      <p className='text-left '>Build foundational skills in algebra, geometry, and probability.</p>
    </div>
    <img src={Math} alt="Image" className="w-32 h-auto ml-4" /> 
  </button>
          
        </div>
      </div>
    );
  };
  
  export default StepSix;