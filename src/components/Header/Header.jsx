import React from 'react';
import { Links } from "../index";

const Header = () => {
  return (
    <header className="w-screen h-24 bg-primary-purple text-white flex flex-row justify-center lg:justify-between items-center px-7">
      <h1 className="text-3xl">Hi, I'm Ben</h1>
      <div className="hidden lg:block">
        <Links />
      </div>
    </header>
  );
};

export default Header;
