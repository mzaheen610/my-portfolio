import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <section className="border border-red-500 w-screen h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white pt-16">
            <div className="container mx-auto px-4 border border-blue-500">
                <h1 className="text-5xl font-bold mb-4 ">Hey, I am Zaheen</h1>
                <div>
                <span className="text-xl text-gray-400">
                    <Typewriter
                        words={['Full-Stack Developer', 'Machine Learning Engineer', 'AI Enthusiast']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </span>
                </div>
                <button className="mt-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
                    View My Work
                </button>
            </div>
        </section>
    );
};

export default Hero;