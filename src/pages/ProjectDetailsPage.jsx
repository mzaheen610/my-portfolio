import { Link, Navigate, useParams } from "react-router-dom";
import { projectBySlug } from "../data/projects";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = projectBySlug[slug];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="pt-28 pb-16 px-6 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center mb-8 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          Back to Portfolio
        </Link>

        <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
          <div className="h-72 bg-gray-700">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='500'%3E%3Crect fill='%23374151' width='1200' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='26' fill='%239CA3AF' text-anchor='middle' dy='.3em'%3EProject Preview%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          <div className="p-8">
            <p className="text-sm uppercase tracking-wider text-indigo-300 mb-3">{project.source}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h1>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>

            <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>
            <ul className="space-y-2 mb-8 text-gray-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-indigo-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-200">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  View Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors"
                >
                  Open Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailsPage;
