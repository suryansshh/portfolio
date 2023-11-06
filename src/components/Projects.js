import React from 'react';

const sectionStyle = {
  padding: '20px',
};

const projectListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const projectCardStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '20px',
  width: '45%',
};

function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce website with payment integration, product catalog, and user profiles. This project involved creating a robust backend and a modern front-end design.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com/e-commerce',
    },
    {
      title: 'Blog Platform',
      description: 'A feature-rich blogging platform with user authentication, post management, and real-time comments. Developed using MERN stack (MongoDB, Express, React, Node.js).',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://example.com/blog-platform',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website, showcasing my web development skills and projects. It includes a gallery of my work, an about me section, and a skills list.',
      technologies: ['React', 'CSS', 'HTML', 'GitHub Pages'],
      link: 'https://example.com/portfolio',
    },
    {
      title: 'Quiz App',
      description: 'An interactive quiz application with real-time scoring and leaderboards. Built with React on the front end and Firebase on the back end for real-time data updates.',
      technologies: ['React', 'Firebase', 'CSS'],
      link: 'https://example.com/quiz-app',
    },
  ];

  return (
    <section style={sectionStyle} id="projects">
      <h2>Projects</h2>
      <div style={projectListStyle} className="project-list">
        {projects.map((project, index) => (
          <div style={projectCardStyle} className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
