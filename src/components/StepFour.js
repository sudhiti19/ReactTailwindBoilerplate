// StepFour.js
import React,{ useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
const StepFour = ({ prevStep, nextStep }) => {
    useEffect(() => {
      renderEquation();
    }, []);
    const renderEquation = () => {
      const equation = '5 \\times \\frac{1}{2} = ?';
      katex.render(equation, document.getElementById('equation'), {
        throwOnError: false,
      });
      const equation2 = '3x + 4 = 5';
    katex.render(equation2, document.getElementById('equation2'), {
      throwOnError: false,
    });

    const equation3 = 'ax^2 + bx + c = 0';
    katex.render(equation3, document.getElementById('equation3'), {
      throwOnError: false,
    });
    const calculusEquation = '\\int_a^b f(x) \\, dx';
    katex.render(calculusEquation, document.getElementById('calculusEquation'), {
      throwOnError: false,
    });
    };
    
    return (
      <div className="container mx-auto">
        <Link to="../step-three" className="inline-block align-middle" >
        <FontAwesomeIcon icon={faCircleChevronLeft} className='ml-6 mt-4 w-7 h-auto' />
        </Link>
        <h1 className="text-2xl font-bold mt-4  text-center">What is your math comfort level</h1>
      <h2 className="text-center mt-3 mb-5 text-gray-700">Choose the highest level you feel confident in</h2>
        <div className="flex justify-center mt-8">
          {/* Four horizontal square buttons */}
          <button  className="border  font-bold py-10 px-10 rounded mx-2 mb-5  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300">
          <span className=' font-thin' id="equation" />
          <h2 className='font-semibold  text-center mt-6'>Arithmetic</h2>
          <h1 className='font-light text-center text-gray-500'>Introductory</h1>
          </button>
          <button  className="border  font-bold py-10 px-10 rounded mx-2 mb-5  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300">
          <span className=" font-thin  " id="equation2" />
          <h2 className='font-semibold  text-center mt-6'>Basic Algebra</h2>
          <h1 className='font-light text-center text-gray-500'>Foundational</h1>
          </button>
          <button  className="border  font-bold py-10 px-10 rounded mx-2 mb-5  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300">
          <span className=" font-thin" id="equation3" />
          <h2 className="font-semibold text-center mt-7">Medium Algebra</h2>
          <h1 className="font-light text-center text-gray-500">Advanced</h1>
          </button>
          <button  className="border items-center font-bold py-10 px-10 rounded mx-2 mb-5  ring-2 ring-transparent  focus:ring-yellow-300 active:ring-yellow-300">
          <span className="text-xl font-thin" id="calculusEquation" />
          <h2 className="font-semibold text-center mt-6">Calculus</h2>
          <h1 className="font-light text-center text-gray-500">Advanced</h1>
          </button>
        </div>
        <div className="flex justify-center mt-9">
        <Link to="/step-five" className="bg-black  hover:bg-gray-700 items-center text-white py-2 px-8 rounded">
          Continue
        </Link>
      </div>
      </div>
    );
  };
  
  export default StepFour;