import React from 'react';
import HeroPic from '../assets/jett.png';
import { Link } from 'react-router-dom';

const Hero = () => {
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
        <h1>Boost Your Account</h1>
        <p>Now And Reach</p>
        <p>The Highest Rank</p>
        <p className="text-lg lg:text-xl mt-8 ml-1">
          Valorant is a free-to-play first-person tactical hero shooter
          developed
        </p>
        <p className="text-lg lg:text-xl ml-1">
          and published by Riot Games
        </p>

        <Link to="/up">
          <button className="border rounded-full text-lg lg:text-xl p-3 lg:p-5 mt-5 hover:bg-white hover:text-black transition duration-300">
            Boost Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;