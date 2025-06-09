import React from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const handleViewProject = () => {
    if (href) {
      // Open link in a new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-gray-900 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Project image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}

        {/* Project title */}
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

        {/* Tags */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Sub-description if available */}
        {subDescription && (
          <p className="text-gray-400 mb-6">{subDescription}</p>
        )}

        {/* View Project button */}
        {href && (
          <button
            onClick={handleViewProject}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            View Project
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
