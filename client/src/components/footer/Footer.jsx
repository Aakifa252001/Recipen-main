import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Logo } from "..";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-b-4 border-primary bg-yellow-50 pt-12 mt-24">
      {/* Footer top */}
      <div className="box flex flex-col md:flex-row  justify-between border-b-2 border-yellow-100 pb-10 gap-8">
        {/* Footer top left */}
        <div className="basis-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-start">
          <Logo />
          <p>
            Your culinary haven for sharing and savoring. Explore recipes,
            restaurants, and engaging discussions. Join us now and indulge in
            flavor-filled experiences!"
          </p>
        </div>
       
      </div>
      {/* Footer bottom */}
   
    </footer>
  );
};

export default Footer;
