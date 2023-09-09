import React from 'react';
import Image from 'next/image';
import ImageUs from '../../img/ImageUs.svg';

function AboutPage() {
  return (
    <div className="sm:flex h-[calc(100vh-8rem)] justify-center items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <Image
            src={ImageUs}
            alt="About Us Image"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl ">About <span className="text-violet-400">Our Company</span></h2>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
