// "use client";
// // // import React from 'react'
// import { FaGithub, FaLinkedIn, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa'


const socials = [
      { icon: <FaGithub />, path: ""},
      { icon: <FaLinkedin />, path: ""},
      { icon: <FaYoutube />, path: ""},
      // { icon: <FaTwitter />, path: ""},
    ];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
        return (
                 <Link key={index} href={item.path}
                  className={iconStyles}>
                     {item.icon}
                 </Link>
             );
         })}  
    </div>
  );
};
// const Social = () => {
//   return <div>Hello, Social, Recheck pending!</div>;
// };

export default Social




