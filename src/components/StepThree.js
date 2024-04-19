// StepThree.js
import React from 'react';
import Image1 from '../img1.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
const StepThree = ({ prevStep, nextStep }) => {


  return (
    <div className="container mx-auto">
      <Link to="../step-two" className="inline-block align-middle" >
        <FontAwesomeIcon icon={faCircleChevronLeft} className='ml-6 mt-4 w-7 h-auto' />
        </Link>
      {/* <h1 className="text-2xl font-bold mb-4">Step Three</h1> */}
      <div className="flex items-center">
        {/* Left side with picture */}
        <div className="w-1/2 p-20 flex justify-center items-center">
          <img src={Image1} alt="Your Picture" className="w-80 h-auto" />
        </div>
        {/* Right side with paragraph */}
        <div className="w-1/2">
        <div className="container mx-auto p-10 mt-12">
          <h1 className='text-2xl font-bold text-left ml-10 mb-2  '>You're in the right place</h1>
          <h2 className="ml-10 mb-20 mr-20 text-left">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</h2>
        </div>
          
        </div>
      </div>
      
      <div className="flex justify-center ">
        
        <Link to="/step-four" className="bg-black hover:bg-gray-700 text-white py-2 px-8 rounded " >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default StepThree;
