import { motion } from "motion/react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      {/* Background overlay with animation */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      />
      
      {/* Modal content with animation */}
      <motion.div
        className="relative max-w-2xl mx-4 border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 100 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 transition-colors z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="close" />
        </button>
        
        {/* Project image */}
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          
          {/* Sub descriptions if array */}
          {Array.isArray(subDescription) && subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          
          {/* Sub description if string */}
          {typeof subDescription === 'string' && (
            <p className="mb-3 font-normal text-neutral-400">{subDescription}</p>
          )}
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <motion.img
                  key={tag.id}
                  src={tag.path || tag.icon}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>
            
            {/* View Project button */}
            <motion.button
              onClick={handleViewProject}
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
