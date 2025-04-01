import Button from "@/components/ui/Button";
import { CodeBlock, dracula } from "react-code-blocks";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const code = `from fastapi import FastAPI\nimport joblib\nimport numpy as np\n\napp = FastAPI()\nmodel = joblib.load("stock_model.pkl")\n\n@app.get("/predict/")\ndef predict(price_history: list[float]):\n    prediction = model.predict(np.array(price_history).reshape(1, -1))\n    return {"next_week_trend": prediction.tolist()}`;

    return (
        <section className="w-full py-16 px-6 sm:px-8 lg:px-12 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 flex-1 flex flex-col items-center md:items-start md:pr-8">
                <h1 className="text-4xl font-bold leading-tight mb-4 text-center md:text-left">
                    Building Scalable AI & Backend Systems
                </h1>

                <div className="h-8 mb-4">
                    <span className="text-xl text-gray-400">
                        <Typewriter
                            words={["Full-Stack Developer", "Machine Learning Engineer", "AI Enthusiast"]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </span>
                </div>

                <p className="text-gray-400 mb-8 max-w-md text-center md:text-left">
                    Designing efficient ML models and robust backend solutions to power data-driven applications.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button variant="outline">View Projects</Button>

                    <Button variant="outline" asChild>
                        <a
                            href="https://github.com/mzaheen610?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>                </div>
            </div>

            {/* Right Code Snippet */}
            <div className="md:w-1/2 flex-1 flex justify-center mt-12 md:mt-0 md:pl-8">
                <div className="w-full max-w-xl transform hover:scale-105 transition-all duration-300">
                    <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl shadow-[0_0_15px_rgba(0,255,127,0.1)] overflow-hidden border border-gray-700/50">
                        {/* Tab Bar */}
                        <div className="flex items-center space-x-2 bg-gray-800/50 p-3 rounded-t-lg border-b border-gray-700/50">
                            {/* Window Controls */}
                            <div className="flex space-x-2 px-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            {/* Tabs */}
                            <div className="flex space-x-2 ml-4">
                                <div className="text-white bg-gray-900/70 px-4 py-1 rounded-md shadow-lg border border-gray-700/50">main.py</div>
                                <div className="text-gray-400 hover:text-gray-300 px-4 py-1 rounded-md transition-colors duration-200">App.jsx</div>
                            </div>
                        </div>

                        {/* Code Block */}
                        <div className="p-6 bg-gray-900/70 rounded-b-lg overflow-x-auto">
                            <pre className="font-code text-sm leading-relaxed">
                                <CodeBlock
                                    text={code}
                                    language="python"
                                    showLineNumbers={false}
                                    theme={dracula}
                                    customStyle={{
                                        background: 'transparent',
                                        padding: '0.5rem',
                                        fontFamily: 'inherit',
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        WebkitFontSmoothing: 'antialiased',
                                        MozOsxFontSmoothing: 'grayscale',
                                    }}
                                />
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;