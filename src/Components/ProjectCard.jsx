import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="rounded-lg w-full h-48 object-cover mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Live Demo
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
