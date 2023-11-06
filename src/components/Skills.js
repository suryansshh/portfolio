import React from 'react';

const sectionStyle = {
  padding: '20px',
};

const skillsListStyle = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
};

const skillItemStyle = {
  marginBottom: '10px',
  marginRight: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f5f5f5',
};

function Skills() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs',
    'Responsive Design', 'Version Control (Git)', 'Redux', 'Vue.js', 'SASS/SCSS', 'Webpack',
    'Jest', 'TypeScript', 'Docker', 'Continuous Integration (CI/CD)', 'SQL', 'Python', 'GraphQL',
  ];

  return (
    <section style={sectionStyle} id="skills">
      <h2>Skills</h2>
      <ul style={skillsListStyle}>
        {skills.map((skill, index) => (
          <li style={skillItemStyle} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
