import React from 'react';

const List = () => {
  return (
    <div className='container mx-auto py-28 '> 
      <div className='grid lg:grid-cols-3 gap-8 py-3'>
        <div className='  shadow-lg rounded-lg py-24 mb-5 text-center '>
          <div className=''>
            <span className='font-semibold font-poppins uppercase tracking-widest text-lg'>
              Low Class
            </span>
            <h3 className='text-3xl font-bold mb-6'>Rp.100.000 </h3>
            
            <ul>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>One Account</li>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>Fast</li>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>Guaranteed Win</li>
              <li className='text-lg pb-3'>Boost Your KDA</li>
            </ul>
            <button className='font-semibold font-poppins mt-5 rounded-full px-5 py-2 bg-black text-white border-xl hover:scale-110'>
              Buy Now
            </button>
          </div>
        </div>

        <div className='shadow-lg rounded-lg py-24 mb-5 text-center'>
          <div>
            <span className='font-semibold font-poppins uppercase tracking-widest text-lg'>
              Middle Class
            </span>
            <h3 className='text-3xl font-bold mb-6'>Rp.100.000 </h3>
            <ul>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>One Account</li>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>Fast</li>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>Guaranteed Win</li>
              <li className='text-lg pb-3'>Boost Your KDA</li>
            </ul>
            <button className='font-semibold font-poppins mt-4 rounded-full px-5 py-2 bg-black text-white border-xl hover:scale-110'>
              Buy Now
            </button>
          </div>
        </div>

        <div className='shadow-lg rounded-lg py-24 mb-5 text-center'>
          <div>
            <span className='font-semibold font-poppins uppercase tracking-widest text-lg'>
              High Class
            </span>
            <h3 className='text-3xl font-bold mb-6'>Rp.100.000 </h3>
            <ul>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>One Account</li>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>Fast</li>
              <li className='text-lg mb-3 pb-3 border-b-[1px] border-gray-200'>Guaranteed Win</li>
              <li className='text-lg pb-3'>Boost Your KDA</li>
            </ul>
            <button className='font-semibold font-poppins mt-4 rounded-full px-5 py-2 bg-black text-white border-xl hover:scale-110'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
