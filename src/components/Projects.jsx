import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      name: "School Management System",
      description: "A web-based school management system for managing students, teachers, and classes.",
      techStack: ["Python", "Django", "HTML/CSS/JS"],
      github: "https://github.com/mzaheen610/school-management-system",
      image: "/images/school-management.png",
    },
    {
      name: "Image Compression using SVD",
      description: "Applied Singular Value Decomposition (SVD) for dimensionality reduction and image compression on grayscale images.",
      techStack: ["Python", "NumPy", "OpenCV"],
      github: "#",
      image: "/images/image-compression.png",
    },
    {
      name: "Gully Lens",
      description: "A consumer analytics app for tracking offline purchases and gaining insights.",
      techStack: ["Django", "Flutter", "PostgreSQL"],
      github: "#",
      image: "/images/gully-lens.png",
    },
    {
      name: "Stock Predictor",
      description: "An ML-based stock recommendation model for predicting potential market trends.",
      techStack: ["Python", "FastAPI", "Scikit-Learn"],
      github: "#",
      image: "/images/stock-predictor.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 },
  };

  return (
    <section className="py-12 px-6 bg-gray-900 text-white min-h-full" id="projects">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="relative h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg absolute w-full flex flex-col items-center"
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].name}
                className="w-full max-h-40 object-contain rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">{projects[currentIndex].name}</h3>
              <p className="text-gray-400 mb-4 text-lg">{projects[currentIndex].description}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {projects[currentIndex].techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-700 px-4 py-2 rounded-full text-md">{tech}</span>
                ))}
              </div>
              <a 
                href={projects[currentIndex].github} 
                className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;