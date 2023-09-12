import React from 'react';
import Image from 'next/image';
import AboutUs from '../../img/AboutUs.svg';

function AboutPage() {
  return (
    <div className='flex flex-col-reverse sm:flex-row items-center'>
      <div className='sm:w-1/2 p-5 sm:p-10 object-center'>
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl ">About <span className="text-violet-400">Our Company</span></h2>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
      <div className='sm:w-1/2 p-5 sm:p-10 object-center'>
        <Image src={AboutUs} alt='Abouts Image' width={500} height={400} />
      </div>
    </div>
  );
}

export default AboutPage;
