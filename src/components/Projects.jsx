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
      name: "ShopLinky Virtual Product Placement",
      description: "A computer-vision pipeline that places virtual products into real scenes for interactive retail previews.",
      longDescription: "Developed a virtual placement workflow for product visualization in real-world environments. Focused on object alignment, scene consistency, and realistic rendering for e-commerce use cases.",
      techStack: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
      github: "#",
      demo: null,
      image: "/images/shoplinky_virtual_product_placement.png",
      category: "cv",
    },
    {
      id: 4,
      name: "Virtual Product Placement - Scene Mapping",
      description: "A scene-mapping experiment for placing virtual products (can-on-table setup) with perspective-aware positioning.",
      longDescription: "Implemented scene-aware placement for tabletop contexts with image transformation and placement calibration to improve visual realism in generated previews.",
      techStack: ["Python", "OpenCV", "Geometry", "Image Processing"],
      github: "#",
      demo: null,
      image: "/images/virtual_product_placement_can_on_table.png",
      category: "cv",
    },
    {
      id: 5,
      name: "BARN Challenge RL PPO Training",
      description: "A reinforcement learning training setup for robot navigation using PPO in cluttered environments inspired by the BARN challenge.",
      longDescription: "Trained and evaluated a PPO-based navigation agent for obstacle-rich navigation benchmarks. Focused on stability, reward shaping, and policy performance under varied map conditions.",
      techStack: ["Python", "Reinforcement Learning", "PPO", "Simulation"],
      github: "#",
      demo: null,
      image: "/images/icra_BARN_challenge_RL_PPO_training.png",
      category: "robotics",
    },
    {
      id: 6,
      name: "Embedded Lab Mapping with ROS",
      description: "A robotics mapping setup in an embedded lab environment using ROS-based navigation and map generation workflows.",
      longDescription: "Built and tested a ROS mapping pipeline with hardware integration for map generation and navigation validation in constrained indoor environments.",
      techStack: ["ROS", "Python", "Robotics", "SLAM", "Embedded Systems"],
      github: "#",
      demo: null,
      image: "/images/embedded_lab_map_ros.png",
      category: "robotics",
    },
    {
      id: 7,
      name: "Robotics Hardware Integration Setup",
      description: "Hardware setup and validation workflow for robotics experiments, sensors, and compute integration.",
      longDescription: "Documented and validated hardware assembly and bring-up process for robotics experiments, including connectivity checks and deployment readiness.",
      techStack: ["Embedded Systems", "Robotics", "Linux", "Sensor Integration"],
      github: "#",
      demo: null,
      image: "/images/hardware_setup.jpeg",
      category: "robotics",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ml", label: "Machine Learning" },
    { id: "cv", label: "Computer Vision" },
    { id: "robotics", label: "Robotics" },
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
            A collection of my recent work across full-stack development, machine learning, computer vision, and robotics
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