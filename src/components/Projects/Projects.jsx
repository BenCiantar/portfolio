import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    const allProjects = await fetch('data/projectData.json');
    setProjects(await allProjects.json());
  };

  const rows = projects.map((project, i) => {
    if (i % 2 === 0) {
      return (
        <article
          key={'project' + i}
          className="w-full h-fit mb-12 bg-green-600 rounded-3xl flex flex-col justify-between items-center lg:flex-row"
        >
          <section className="w-full h-1/2 p-8 bg-red-600 rounded-3xl lg:w-1/2 lg:h-full">
            <p>{project.name}</p>
            <p>{project.date}</p>
            <p>{project.type}</p>
            <p>{project.about}</p>
            <p>{project.githubUrl}</p>
            <p>{project.liveUrl}</p>
          </section>
          <section className="w-full h-1/2 p-8 bg-green-600 rounded-none rounded-b-3xl lg:rounded-none lg:rounded-r-3xl lg:w-1/2 lg:h-full">
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
          </section>
        </article>
      );
    } else {
      return (
        <article
          key={'project' + i}
          className="w-full h-fit mb-12 bg-green-600 rounded-3xl flex flex-col justify-between items-center lg:flex-row"
        >
          <section className="w-full h-1/2 p-8 bg-green-600 rounded-none rounded-t-3xl lg:rounded-l-3xl lg:rounded-none  lg:w-1/2 lg:h-full">
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
            <p>img goes here</p>
          </section>
          <section className="w-full h-1/2 p-8 bg-red-600 rounded-3xl lg:w-1/2 lg:h-full">
            <p>{project.name}</p>
            <p>{project.date}</p>
            <p>{project.type}</p>
            <p>{project.about}</p>
            <p>{project.githubUrl}</p>
            <p>{project.liveUrl}</p>
          </section>
        </article>
      );
    }
  });

  return (
    <section className="w-full h-fit pt-14 pl-14 pr-14 text-xl flex flex-col justify-evenly items-center">
      <h2>My Projects</h2>
      <div className="w-full h-fit mt-12 flex flex-col justify-evenly items-center">
        {rows}
      </div>
    </section>
  );
};

export default Projects;
