// StepTwo.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
const StepTwo = ({ prevStep }) => {
  
  return (

    <div className="container mx-auto">
      
        <Link to="../step-one" className="inline-block align-middle" >
        <FontAwesomeIcon icon={faCircleChevronLeft} className='ml-6 mt-4 w-7 h-auto' />
        </Link>
      
      <h1 className="text-2xl font-bold  text-center">Which are you most interested in?</h1>
      <h2 className="text-center mt-3 mb-3  text-gray-700">Choose just one to make your experience better!!</h2>
      <div className="flex flex-col items-center mb-3 w-full">
       <button className="border text-left text-black w-1/2 h-16   ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 font-semi-bold py-2 px-4 flex items-center rounded mb-2">
          {/* <FontAwesomeIcon icon={faArrowLeft} className="mr-4" /> */}
          <FontAwesomeIcon icon={faChartLine} className='mr-3' />
          <span className="flex-shrink-0">Learning specific skills</span>
        </button>
        <button className="border text-left text-black w-1/2 h-16  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 font-semi-bold py-2 px-4 flex items-center rounded mb-2">
        <FontAwesomeIcon icon={faEarthAsia} className='mr-3'/>
        <span className="flex-shrink-0">New topics</span>
        </button>
        <button className="border text-left text-black w-1/2 h-16  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 font-semi-bold py-2 px-4 flex items-center rounded mb-2">
        <FontAwesomeIcon icon={faSchool} className="mr-3"/>
        <span className="flex-shrink-0">Math foundations</span>
        </button>
        <button className="border text-left text-black w-1/2 h-16  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 font-semi-bold py-2 px-4 flex items-center rounded mb-2">
        <FontAwesomeIcon icon={faBrain} className='mr-4' />
        <span className="flex-shrink-0">Exercising my brain</span>
        </button>
        <button className="border text-left text-black w-1/2 h-16  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 font-semi-bold py-2 px-4 flex items-center rounded mb-2">
        <FontAwesomeIcon icon={faLightbulb} className='mr-4' />
        <span className="flex-shrink-0">Something else</span>
        </button>
        
      </div>
      <div className="flex justify-center">
        <Link to="/step-three" className="bg-black hover:bg-gray-700 items-center text-white py-2 px-8 rounded">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default StepTwo;
