// import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import Founder from '../../assets/founder.png'

// export default function Aboutus() {
//   return (
//     <>
//       <p className='text-4xl font-bold font-serif p-2 m-2 justify-center flex'> -- Meet Our Team --</p>  
//       <div className='h-full flex place-items-center mx-14 p-5 bg-slate-200 rounded-xl gap-5'>
//         <img src={Founder} width={250}/>
//         <div className='flex flex-col mx-5'>
//           <p className='text-xl font-thin'>
//             Hii there! this is Anujkumar, a Frontend Avenger, a failure and aspiring Full Stack Cyclone. My superpowers lie in HTML, CSS, JavaScript, and ReactJs. I am also proficient in C++, DSA, and SDLC, and I am currently in the process of mastering NodeJS and ExpressJs, with a thirst for even more knowledge. My unwavering belief in "Failure is an event never an person". My ultimate goal is to become an entrepreneur, creating innovative products that makes Impact on society. I'm crazy about Startups.
//           </p>
//           <div className='flex gap-3 mt-5'>
//             <Link to='https://www.linkedin.com/in/anujkumarlyadav/'> <FaLinkedinIn className='text-3xl'/> </Link>
//             <Link to='https://github.com/anujkumaryadav'> <FaGithub className='text-3xl'/> </Link>
//             <Link to='https://twitter.com/Anujkum74777634'> <FaXTwitter className='text-3xl'/> </Link>
//             <Link to='https://www.instagram.com/yadav.ji.in/'> <FaInstagram className='text-3xl'/> </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import MeetOurTeam from '../common/MeetOurTeam';

export default function Aboutus() {
  return (
    <>
      <MeetOurTeam/>
    </>
  );
}
