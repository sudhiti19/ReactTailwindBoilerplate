import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';



const StepOne = () => {
  
  return (
    <div className="container mx-auto">
      
      <h1 className="text-2xl font-bold p-10 text-center">What describes you best?</h1>
      <div className="flex flex-col items-center mb-4 w-full">
        {/* Student button */}
        <button
          className="border text-left w-1/2 h-16 font-semi-bold ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300  py-2 px-4 rounded mb-2 flex items-center "
          
        >
          <FontAwesomeIcon icon={faGraduationCap} className="mr-4" />
          <span className="flex-shrink-0">Student</span>
        </button>
        {/* Professional button */}
        <button
          className="border text-left w-1/2 h-16 font-semi-bold  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 py-2 px-4 rounded mb-2 flex items-center"
          
        >
          <FontAwesomeIcon icon={faUserTie} className="mr-4" />
          <span className="flex-shrink-0">Professional</span>
        </button>
        {/* Parent button */}
        <button
          className="border text-left w-1/2 h-16 font-semi-bold  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 py-2 px-4 rounded mb-2 flex items-center"
          
        >
          <FontAwesomeIcon icon={faPerson} className="mr-5" />
          <span className="flex-shrink-0">Parent</span>
        </button>
        {/* Lifelong learner button */}
        <button
          className="border text-left w-1/2 h-16 font-semi-bold  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 py-2 px-4 rounded mb-2 flex items-center"
        >
          <FontAwesomeIcon icon={faChalkboardUser} className="mr-3" />
          <span className="flex-shrink-0">Lifelong learner</span>
        </button>
        {/* Teacher button */}
        <button
          className="border text-left w-1/2 h-16 font-semi-bold  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300 py-2 px-4 rounded mb-2 flex items-center"
        >
          <FontAwesomeIcon icon={faSchool} className="mr-3" />
          <span className="flex-shrink-0">Teacher</span>
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/step-two" className="bg-black hover:bg-gray-700 items-center text-white py-2 px-8 rounded">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default StepOne;
