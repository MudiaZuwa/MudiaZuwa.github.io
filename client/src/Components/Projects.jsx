import React from "react";
import { ProjectList } from "./ProjectList";

const Projects = () => {
  const featuredProjects = ProjectList.slice(0, 2);
  const otherProjects = ProjectList.slice(2);

  return (
    <div>
      {/* Featured Projects */}
      <section className="flex flex-col gap-4" id="projects">
        <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl border border-[#324467]/50 bg-[#192233]/70 overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,91,236,0.3)] hover:border-primary/50"
            >
              {project.image && (
                <img
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={project.image}
                  alt={project.name}
                />
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white text-xl font-bold">{project.name}</h3>
                <p className="text-[#92a4c9] text-sm mt-1 mb-4 flex-1">
                  {project.intro || project.description}
                </p>

                {project.code && project.code.length > 0 && (
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {project.code.map((Code, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-[#E0E0E0] bg-white/10 px-2 py-1 rounded"
                      >
                        <Code className="w-3 h-3 sm:w-5 sm:h-5 object-contain" />
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto">
                  {project.pageLink && (
                    <a
                      href={project.pageLink}
                      className="text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                  {project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      className="text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="flex flex-col gap-4" id="other-projects">
        <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Other Projects
        </h2>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-xl border border-[#324467]/50 bg-[#192233]/70 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-[#1f2b42]/70"
            >
              <h3 className="text-white text-lg font-bold">{project.name}</h3>
              <p className="text-[#92a4c9] text-sm font-normal leading-normal">
                {project.intro || project.description}
              </p>

              <div className="flex items-center gap-4 mt-2 flex-wrap">
                {project.pageLink && (
                  <a
                    href={project.pageLink}
                    className="text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.downloadLink && (
                  <a
                    href={project.downloadLink}
                    className="text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
