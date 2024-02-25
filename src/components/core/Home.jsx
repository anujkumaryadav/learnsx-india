import React from 'react';
import { Link } from 'react-router-dom';
import One from '../../assets/two.png';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-8 mt-8 p-6 md:p-20'>
        <div className='flex flex-col justify-center gap-2'>
          <p className='text-3xl md:text-5xl text-center md:text-left text-pink-300 font-bold'>
            Let's Normalize Sex Education
          </p>
          <p className='text-lg md:text-xl text-center md:text-left text-pink-300'>
            Advocating for Inclusive Education. Our mission is to foster understanding and acceptance through comprehensive sex education, promoting healthy relationships and informed choices for all. Join us in breaking barriers, empowering individuals, and creating a more open and inclusive society.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link to='#'>
              <button className='rounded-md bg-pink-600 text-white px-5 h-10 hover:bg-pink-500 transition-all duration-200 mt-4'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={One} alt="One" className='max-w-full md:max-w-none' style={{ maxWidth: '400px' }} />
        </div>
      </div>

    </div>
  );
}
