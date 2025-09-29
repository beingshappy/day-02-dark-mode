import React from 'react';
import { Code, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a difference. My journey in tech started with curiosity 
              and has evolved into a love for building scalable, user-friendly applications.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying ahead of the curve in this ever-evolving field.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-gray-400">Writing maintainable, scalable code that stands the test of time.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-lime-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Learner</h3>
              <p className="text-gray-400">Quickly adapting to new technologies and methodologies.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group sm:col-span-2">
              <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solver</h3>
              <p className="text-gray-400">Turning complex challenges into elegant solutions, one cup of coffee at a time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;