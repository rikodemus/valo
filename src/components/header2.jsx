import { useState } from 'react';
import { CgNametag } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center lg:px-10 fixed w-full z-50">
      <div>
        <Link to="/" className="text-white font-poppins font-semibold text-3xl flex items-center gap-2">
          <CgNametag />Jockey
        </Link>
      </div>

      <div className="lg:hidden ">
        <button className="focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      <div className={`lg:flex lg:items-center lg:space-x-4 ${isMenuOpen ? 'flex flex-col  absolute top-16 left-0 w-full bg-black z-10' : 'hidden'}`}>
        <Link to="/Price" className="transition duration-500 ease-in-out text-white font-semibold hover:bg-slate-800 rounded-full px-5 py-2 text-xl">
          Price-List
        </Link>
        <Link to="/In" className="transition duration-500 ease-in-out text-white font-semibold hover:bg-slate-800 rounded-full px-5 py-2 text-xl">
          Profile
        </Link>
       
      </div>
    </nav>
  );
};

export default Header2;
