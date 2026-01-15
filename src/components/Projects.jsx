import React from "react";
import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Projects</h1>
      </div>
      <div className="bg-base-200 min-h-[60vh] max-w-6xl mx-auto my-5  grid grid-cols-3 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
