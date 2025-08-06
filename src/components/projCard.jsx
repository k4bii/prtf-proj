import { FaGithub } from "react-icons/fa";

const ProjCard = ({ project }) => {
  return (
 <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black border-2 border-white hover:shadow-babyBlue hover:shadow-2xl transition-all duration-300 p-6">
      <div className="mb-4">
        <h2 className="font-bold font-vcr-osd-mono text-xl text-white">
          {project.title}
        </h2>
      </div>
      <p className="text-gray-300 font-vcr-osd-mono text-base mb-4">
        {project.description}
      </p>
      {project.tags && project.tags.length > 0 && (
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-800 font-vcr-osd-mono hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors duration-300"
      >
        <FaGithub className="mr-2" />
        view code
      </a>
    </div>
  );
};

export default ProjCard;
