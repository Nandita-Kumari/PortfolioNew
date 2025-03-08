import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          ✖
        </button>

        <h2 className="text-xl font-semibold">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>

        {/* Check if project has an image or video */}
        {project.mediaType === "video" ? (
          <video controls className="w-full mt-4">
            <source src={project.media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={project.media} alt={project.name} className="w-full mt-4 rounded" />
        )}

        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Visit Project
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
