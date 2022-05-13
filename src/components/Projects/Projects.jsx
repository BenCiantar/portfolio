import React, { useEffect, useState } from 'react';
import { data } from '../../data/projectData';

const Projects = () => {
  const rows = data.map((project, i) => (
    <article key={"project" + i}>
      <p>{project.name}</p>
      <p>{project.type}</p>
    </article>
  ));

  return (
    <section className="w-full h-fit pt-14 text-xl flex flex-col justify-evenly items-center">
      <h2>My Projects</h2>
      <div className="w-full h-fit flex flex-col justify-evenly items-center">
        {rows}
      </div>
    </section>
  );
};

export default Projects;
