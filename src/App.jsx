import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen w-full">
      {/* Navbar - Full Width */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col">
        <Hero />
        <Projects />
      </main>

      {/* Footer - Always at the Bottom */}
      <footer className="bg-black text-white py-4 text-center w-full">
        <p>&copy; 2025 Mohammed Zaheen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;