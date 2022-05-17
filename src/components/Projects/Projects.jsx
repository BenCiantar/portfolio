import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    const allProjects = await fetch("data/projectData.json");
    setProjects(await allProjects.json());
  };

  const rows = projects.map((project, i) => (
    <article key={'project' + i}>
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
