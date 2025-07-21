import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center bg-cover bg-center" style={{ backgroundImage: "url('/mike-hero.jpg')" }}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Mike Cibeh</h1>
        <p className="text-xl md:text-2xl mb-6">Disruptor • Innovator • Visionary</p>
        <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">Explore Projects</a>
      </section>

      <section className="px-6 py-20 max-w-4xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-6">About Mike</h2>
        <p className="text-lg leading-relaxed">
          Mike Cibeh, born as Michael Praise Gadza, is an award-winning artist/rapper and a vibrant, disruptive entrepreneur. He is the founder and co-founder of several initiatives, including Dynamic Thought Leadership (DTL), the National Youth Leadership Summit, the Manicaland Youth Hub, and Ubuntium.org. Mike is passionate about personal and leadership development, entrepreneurship, and content creation. His mission is to empower African youth through disruptive innovation and education.
        </p>
      </section>

      <section className="bg-white text-black px-6 py-20" id="projects">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Project title="The Manicaland Youth Hub" description="Empowering underserved youth through leadership, innovation, and mental health support." />
          <Project title="National Youth Leadership Summit" description="Bringing together experts to inspire and educate youth on leadership and entrepreneurship." />
          <Project title="Ubuntium Utility Token" description="An African blockchain project to economically empower communities through a utility token." />
          <Project title="Dynamic Thought Leadership (DTL)" description="A leadership organization/think tank helping African youth become globally competitive." />
        </div>
      </section>

      <section className="px-6 py-20 text-center" id="contact">
        <h2 className="text-3xl font-bold mb-6">Connect with Mike</h2>
        <div className="flex justify-center gap-4 flex-wrap text-lg">
          <a href="https://www.linkedin.com/in/mike-cibeh-501430215" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/mike_cibeh" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://x.com/MikeCibeh57023" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          <a href="https://vm.tiktok.com/ZMSCYWvhU/" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://wa.me/263717520189" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:mikecibeh@gmail.com">Email</a>
          <a href="https://linktr.ee/Mikecibeh" target="_blank" rel="noopener noreferrer">Linktree</a>
        </div>
      </section>

      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Mike Cibeh. All rights reserved.
      </footer>
    </div>
  );
}

function Project({ title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
