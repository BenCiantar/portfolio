import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { BsEnvelope } from 'react-icons/bs';

const Links = () => {
  return (
    <nav>
      <ul className="w-48 flex flex-row justify-evenly items-center">
        <a href="https://www.linkedin.com/in/benciantar/">
          <li className="hover:text-black">
            <SiLinkedin size="2rem" />
          </li>
        </a>
        <a href="https://github.com/BenCiantar">
          <li className="hover:text-black">
            <SiGithub size="2rem" />
          </li>
        </a>
        <a href="mailto:benjamin.ciantar@hyperisland.se">
          <li className="hover:text-black">
            <BsEnvelope size="2.3rem" />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Links;
