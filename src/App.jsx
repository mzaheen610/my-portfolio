import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </main>
    </div>
  );
}

export default App;