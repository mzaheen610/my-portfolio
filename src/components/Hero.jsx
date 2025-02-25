const Hero = () => {
    return (
      <section className="border border-red-500 w-screen h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white pt-16">
        <div className="container mx-auto px-4 border border-blue-500">
          <h1 className="text-5xl font-bold mb-4">Hey, Mohammed Zaheen</h1>
          <p className="text-xl text-gray-400">Full-Stack Developer | Machine Learning Engineer</p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
            View My Work
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;