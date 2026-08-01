import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100 text-white flex justify-center gap-6">
      <a
        href="https://github.com/vaishnavk09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:vaishnavk9420@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/connect-with-vaishnav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
