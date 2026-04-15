import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      name: "School Management System",
      description: "A comprehensive web-based school management system for managing students, teachers, and classes. Features include student enrollment, grade tracking, attendance management, and exam scheduling.",
      longDescription: "Built during my academic tenure, this Django-based system streamlined administrative tasks for schools. Implemented role-based access control for administrators, teachers, and students, with real-time data updates and reporting capabilities.",
      techStack: ["Python", "Django", "PostgreSQL", "HTML/CSS/JS", "Bootstrap"],
      github: "https://github.com/mzaheen610/school-management-system",
      demo: null,
      image: "/images/school-management.png",
      category: "fullstack",
    },
    {
      id: 2,
      name: "Image Compression using SVD",
      description: "Applied Singular Value Decomposition (SVD) for dimensionality reduction and efficient image compression on grayscale images with minimal quality loss.",
      longDescription: "A machine learning project demonstrating linear algebra applications. Used NumPy and OpenCV to compress images using SVD, achieving 70% size reduction while maintaining visual fidelity. Includes visualization of compression trade-offs.",
      techStack: ["Python", "NumPy", "OpenCV", "Matplotlib", "Scikit-Learn"],
      github: "#",
      demo: null,
      image: "/images/image-compression.png",
      category: "ml",
    },
    {
      id: 3,
      name: "Gully Lens",
      description: "A consumer analytics mobile app for tracking offline purchases and gaining actionable insights about spending patterns and product trends.",
      longDescription: "Co-developed a Flutter-based mobile application with Django backend for retail analytics. Users can log purchases, categorize expenses, and receive smart recommendations. Real-time data sync with PostgreSQL backend.",
      techStack: ["Django", "Flutter", "PostgreSQL", "Firebase", "REST API"],
      github: "#",
      demo: null,
      image: "/images/gully-lens.png",
      category: "fullstack",
    },
    {
      id: 4,
      name: "Stock Market Predictor",
      description: "An ML-based stock recommendation model using historical data and technical indicators to predict market trends and provide investment recommendations.",
      longDescription: "Developed a predictive model using time-series analysis and machine learning algorithms. Integrated with real-time market data APIs, built a REST API with FastAPI, and created visualizations for trend analysis and predictions.",
      techStack: ["Python", "FastAPI", "Scikit-Learn", "Pandas", "TensorFlow", "Plotly"],
      github: "#",
      demo: null,
      image: "/images/stock-predictor.png",
      category: "ml",
    },
    {
      id: 5,
      name: "E-commerce Platform",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management system.",
      longDescription: "Built a scalable e-commerce solution with user authentication, product filtering, secure checkout, and admin dashboard. Integrated Stripe for payments and implemented order tracking with email notifications.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      github: "#",
      demo: null,
      image: "/images/ecommerce.png",
      category: "fullstack",
    },
    {
      id: 6,
      name: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and productivity analytics.",
      longDescription: "A web application for teams to organize tasks, set deadlines, assign responsibilities, and track progress. Features include drag-and-drop kanban boards, team communication, and automated reminders.",
      techStack: ["React", "Firebase", "TailwindCSS", "Redux", "WebSockets"],
      github: "#",
      demo: null,
      image: "/images/task-manager.png",
      category: "fullstack",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ml", label: "Machine Learning" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { y: -8, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work spanning full-stack development, machine learning, and data science
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <motion.div className="relative h-48 overflow-hidden bg-gray-700">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23374151' width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%239CA3AF' text-anchor='middle' dy='.3em'%3EProject Preview%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-gray-700 hover:bg-blue-600 text-center text-sm rounded-lg transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-center text-sm rounded-lg transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;