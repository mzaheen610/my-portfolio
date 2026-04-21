import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen w-full">
      {/* Navbar - Full Width */}
      <Navbar />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      </Routes>

      {/* Footer - Always at the Bottom */}
      <footer className="bg-black text-white py-8 text-center w-full border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400 mb-4">&copy; 2025 Mohammed Zaheen. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Built with React, Vite, and TailwindCSS</p>
        </div>
      </footer>
      {/* Analytics */}
      <Analytics />
    </div>
  );
}

export default App;