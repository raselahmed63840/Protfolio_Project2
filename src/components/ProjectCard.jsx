import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, techStack, githubUrl, liveUrl, image } = project;
  return (
    <div className="card bg-base-100 w-80 shadow-sm border-1 ">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <p className="flex flex-wrap gap-2">
          {techStack.map((stack) => (
            <div className="border px-2 py-2 rounded-2xl ">{stack}</div>
          ))}
        </p>
        <div className="card-actions justify-end">
          <a href={githubUrl} className="badge badge-outline">
            Github
          </a>
          <a href={liveUrl} className="badge badge-outline">
            Lives
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
