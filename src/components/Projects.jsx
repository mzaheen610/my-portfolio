const Projects = () => {
    const projects = [
      {
        name: "School Management System",
        description: "A web-based school management system for managing students, teachers, and classes.",
        techStack: ["Python", "Django", "HTML/CSS/JS"],
        github: "https://github.com/mzaheen610/school-management-system",
        liveDemo: "#",
      },
      {
        name: "Image Compression using SVD",
        description: "Applied Singular Value Decomposition (SVD) for dimensionality reduction and image compression on grayscale images",
        techStack: ["Python", "NumPy", "OpenCV"],
        github: "#",
        liveDemo: "#",
      },
      {
        name: "Gully Lens",
        description: "A consumer analytics app for tracking offline purchases and gaining insights.",
        techStack: ["Django", "Flutter", "PostgreSQL"],
        github: "#",
        liveDemo: "#",
      },
      {
        name: "Stock Predictor",
        description: "An ML-based stock recommendation model for predicting potential market trends.",
        techStack: ["Python", "FastAPI", "Scikit-Learn"],
        github: "#",
        liveDemo: "#",
      }
    ];
  
    return (
      <section className="py-12 px-6 bg-gray-900 text-white" id="projects">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  <a href={project.github} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.liveDemo} className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  