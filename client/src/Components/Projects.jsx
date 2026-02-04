import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getFeaturedProjects,
  getSecondaryProjects,
  getArchivedProjects,
} from "./ProjectList";

const Projects = () => {
  const [showArchived, setShowArchived] = useState(false);

  const featuredProjects = getFeaturedProjects();
  const secondaryProjects = getSecondaryProjects();
  const archivedProjects = getArchivedProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* Featured Projects - Full Cards */}
      <section className="py-6" id="projects">
        <motion.h2
          className="text-white text-[28px] font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              className={`flex flex-col gap-4 rounded-xl border border-border bg-overlay/70 overflow-hidden group transition-all duration-300 ${index % 2 === 0
                ? "hover:shadow-[0_0_30px_rgba(97,218,251,0.2)] hover:border-brand-frontend/50"
                : "hover:shadow-[0_0_30px_rgba(28,60,62,0.4)] hover:border-brand-agent"
                }`}
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
                <p className="text-subtle text-sm mt-1 mb-4 flex-1">
                  {project.intro || project.description}
                </p>

                {project.code && project.code.length > 0 && (
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {project.code.map((CodeIcon, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-[#E0E0E0] bg-brand-agent/50 px-2 py-1 rounded"
                      >
                        <img
                          src={CodeIcon}
                          className="w-3 h-3 sm:w-5 sm:h-5 object-contain"
                          alt="tech-icon"
                        />
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto flex-wrap">
                  {project.pageLink && (
                    <a
                      href={project.pageLink}
                      className="text-sm font-medium text-brand-frontend hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                  {project.npmLink && (
                    <a
                      href={project.npmLink}
                      className="text-sm font-medium text-brand-agent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NPM
                    </a>
                  )}
                  {project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      className="text-sm font-medium text-brand-frontend hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="text-sm font-medium text-brand-frontend hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Secondary Projects - Compact Cards */}
      {secondaryProjects.length > 0 && (
        <section className="py-6" id="other-projects">
          <motion.h2
            className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Other Projects
          </motion.h2>

          <motion.div
            className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={cardVariants}
                className={`flex flex-col gap-3 rounded-xl border border-border bg-overlay/70 p-6 transition-all duration-300 hover:bg-tungsten/70 ${index % 2 === 0 ? "hover:border-brand-frontend/50" : "hover:border-brand-agent"
                  }`}
              >
                <h3 className="text-white text-lg font-bold">{project.name}</h3>
                <p className="text-subtle text-sm font-normal leading-normal">
                  {project.intro || project.description}
                </p>

                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  {project.pageLink && (
                    <a
                      href={project.pageLink}
                      className="text-sm font-medium text-brand-frontend hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="text-sm font-medium text-brand-frontend hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      className="text-sm font-medium text-brand-frontend hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Archived Projects - Behind Show More */}
      {archivedProjects.length > 0 && (
        <section className="flex flex-col gap-4 px-4" id="archived-projects">
          <motion.button
            onClick={() => setShowArchived(!showArchived)}
            className="mt-4 px-4 py-2 text-sm font-medium text-subtle hover:text-white border border-border rounded-lg hover:border-brand-frontend/50 transition-colors flex items-center justify-center gap-2 w-full md:w-auto md:mx-auto md:px-8"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span>{showArchived ? "Hide" : "Show More"}
              {/* Projects */}
              {/* ({archivedProjects.length}) */}
            </span>
            <motion.span
              animate={{ rotate: showArchived ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="material-symbols-outlined text-base"
            >
              expand_more
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {showArchived && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {archivedProjects.map((project) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex flex-col gap-2 rounded-lg border border-border bg-overlay/50 p-4 transition-all duration-300 hover:border-brand-agent/50 hover:bg-tungsten/50"
                  >
                    <h4 className="text-white text-base font-semibold">{project.name}</h4>
                    <p className="text-subtle text-xs leading-normal line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3 mt-auto pt-2">
                      {project.pageLink && (
                        <a
                          href={project.pageLink}
                          className="text-xs font-medium text-brand-frontend hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="text-xs font-medium text-subtle hover:text-brand-frontend hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}
    </div>
  );
};

export default Projects;
