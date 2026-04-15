import { motion } from "framer-motion";

const About = () => {
  const skills = {
    "Frontend": ["React", "JavaScript/TypeScript", "TailwindCSS", "HTML/CSS"],
    "Backend": ["Python", "Django", "Node.js/Express", "FastAPI"],
    "Databases": ["PostgreSQL", "MongoDB", "Firebase"],
    "Tools & Others": ["Git", "REST APIs", "Docker", "AWS"],
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Self-Directed Projects",
      period: "2023 - Present",
      description: "Building scalable web applications with modern tech stacks, focusing on user experience and performance optimization.",
    },
    {
      title: "Data Science Intern",
      company: "Tech Company",
      period: "2022 - 2023",
      description: "Developed ML models for predictive analytics and data visualization dashboards using Python and scikit-learn.",
    },
    {
      title: "Freelance Developer",
      company: "Multiple Clients",
      period: "2021 - 2023",
      description: "Designed and implemented custom web solutions for various clients across different industries.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              I'm a passionate full-stack developer and data enthusiast with a keen interest in building scalable, user-centric web applications. With hands-on experience in modern web technologies and machine learning, I love turning complex problems into elegant, efficient solutions.
            </p>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or writing technical blogs. I'm always eager to learn and collaborate with talented individuals on impactful projects.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "20+", label: "Tech Skills" },
              { number: "10+", label: "Happy Clients" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg p-6"
              >
                <h4 className="font-bold text-lg mb-4 text-blue-400">{category}</h4>
                <ul className="space-y-2">
                  {skillList.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 flex items-center before:content-['▸'] before:mr-2 before:text-blue-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
