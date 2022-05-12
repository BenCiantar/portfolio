import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { BsEnvelope } from 'react-icons/bs';

const Links = () => {
  return (
    <nav>
      <ul className="w-48 flex flex-row justify-evenly items-center">
        <a href="">
          <li>
            <SiLinkedin size="2rem" />
          </li>
        </a>
        <a href="">
          <li>
            <SiGithub size="2rem" />
          </li>
        </a>
        <a href="">
          <li>
            <BsEnvelope size="2.3rem" />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Links;
