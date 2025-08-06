import React from "react";
import ProjCard from "../components/projCard";
import projects from "../data/projects";

function Projects() {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center px-2 sm:px-0" style={{ backgroundImage: "url('/space-bg.jpeg')" }}>
      {/* mobile */}
      <div className="flex flex-col items-center text-center pt-20 sm:hidden">
        <h1 className="text-4xl font-vcr-osd-mono font-bold text-white mb-6">projects</h1>
        <div className="flex flex-col gap-8 w-full items-center mt-8">
          {projects.map((project, idx) => (
            <ProjCard key={project.title + idx} project={project} />
          ))}
        </div>
      </div>

      {/* desktop */}
      <div className="hidden sm:block text-center pt-20">
        <h1 className="text-8xl font-vcr-osd-mono font-bold text-white mb-8">projects</h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjCard key={project.title + idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

