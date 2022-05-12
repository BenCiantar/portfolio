import React from 'react';
import { Links } from "../index"

const Footer = () => {
  return (
    <footer className="w-screen h-20 bg-primary-purple text-white flex flex-row justify-center items-center lg:hidden">
      <Links />
    </footer>
  );
};

export default Footer;
