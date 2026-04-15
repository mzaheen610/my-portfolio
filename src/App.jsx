import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen w-full">
      {/* Navbar - Full Width */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

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