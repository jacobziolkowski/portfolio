import React, { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      id: 'skinsync',
      title: 'SkinSync',
      category: 'Health IT',
      description: 'AI-powered chronic skin condition tracker with Echo AI integration',
      tags: ['Health Data', 'AI', 'iOS Design'],
      status: 'In Development'
    },
    {
      id: 'homelab',
      title: 'Homelab Infrastructure',
      category: 'Cloud & Systems',
      description: 'Personal server setup: whitebear (Dell Latitude) + MacBook Pro M1',
      tags: ['Self-hosted', 'IoT', 'Networking'],
      status: 'Active'
    },
    {
      id: 'iot-health',
      title: 'IoT Health Dashboard',
      category: 'Health IT',
      description: 'Real-time health data visualization using ESP32 and cloud integration',
      tags: ['IoT', 'Data Viz', 'Healthcare'],
      status: 'Concept'
    }
  ];

  const skills = {
    'Health IT': ['Data Visualization', 'Healthcare Systems', 'Compliance'],
    'Cloud & Infrastructure': ['AWS', 'Firebase', 'Google Cloud', 'Self-hosting'],
    'Development': ['Flask', 'HTML/CSS/JS', 'OpenAI API', 'Cursor'],
    'Hardware': ['Raspberry Pi', 'Arduino', 'ESP32', 'IoT Sensors'],
    'Design': ['Figma', 'UX Prototyping', 'Apple-inspired UI']
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Jacob Ziolkowski</div>
          <div className="flex gap-8 text-sm">
            <button 
              onClick={() => setActiveSection('about')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'about' ? 'text-blue-600' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'projects' ? 'text-blue-600' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveSection('skills')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'skills' ? 'text-blue-600' : ''}`}
            >
              Skills
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'contact' ? 'text-blue-600' : ''}`}
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold tracking-tight">
              Building at the intersection of<br />
              <span className="text-blue-600">health tech</span> and <span className="text-blue-600">AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              4th-year ICT student at FSU specializing in Health Informatics. 
              Creating AI-driven solutions for healthcare and outdoor tech.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-gray-700">
                <p>
                  I'm a hands-on technologist driven by building meaningful products in health IT and outdoor tech. 
                  Currently pursuing my ICT degree with a Health Informatics certificate at FSU.
                </p>
                <p>
                  My approach combines systems thinking with practical implementation—whether it's setting up 
                  self-hosted infrastructure, designing AI companions, or prototyping IoT health devices.
                </p>
                <p>
                  When I'm not coding, you'll find me mountain biking, rock climbing, or tinkering with my 
                  2022 Corolla Hatchback XSE.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Health IT internship preparation</li>
                    <li>• Building AI-powered health dashboard</li>
                    <li>• Cloud certifications (AWS, CompTIA)</li>
                    <li>• Homelab expansion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Goals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Launch AI/IoT consumer products</li>
                    <li>• Financial independence through tech</li>
                    <li>• Build health-data visualization tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Projects</h2>
            <div className="space-y-8">
              {projects.map(project => (
                <div key={project.id} className="border border-gray-200 rounded-2xl p-8 hover:border-blue-600 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{project.category}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <div className="max-w-2xl space-y-6">
              <p className="text-xl text-gray-700">
                Looking for opportunities in health IT, AI consulting, cloud administration, 
                or cybersecurity compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="font-semibold w-24">Location:</span>
                  <span>Florida (open to FL, GA, NC)</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="font-semibold w-24">Email:</span>
                  <span className="text-blue-600">your.email@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="font-semibold w-24">LinkedIn:</span>
                  <span className="text-blue-600">linkedin.com/in/yourprofile</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="font-semibold w-24">GitHub:</span>
                  <span className="text-blue-600">github.com/yourusername</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 mt-20">
        <div className="max-w-5xl mx-auto text-center text-gray-600">
          <p>© 2025 Jacob Ziolkowski. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}