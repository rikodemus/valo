import React, {useEffect, useState} from 'react'
import HeroPic from '../assets/jett.png';
import { Link } from 'react-router-dom';


const Hero2 = () => {
  

 
  return (
    <div className="flex flex-col lg:flex-row py-9">
      <div className=" lg:p-24">
        <img
          src={HeroPic}
          alt="Hero"
          width={400}
          height={500}
          className="rounded-full border-white border-y-2 mx-auto lg:mx-20"
        />
      </div>
      <div className="text-center lg:text-left text-4xl lg:text-8xl font-semibold font-poppins mt-20 text-white p-5 lg:p-10">
        <h1>Welcome</h1>
       
       
      </div>
    </div>
  );
};

export default Hero2;