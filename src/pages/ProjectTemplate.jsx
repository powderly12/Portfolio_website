import { useParams } from 'react-router-dom';
import React from 'react';
import './ProjectTemplate.css';

function ProjectTemplate() {
  return (
    <div className="project-container">
      <h1 className="project-title">Project Title</h1>
      <p className="project-intro">
        This is an introductory section for the project, briefly describing its concept and purpose.
      </p>
      
      <div className="project-images">
        <img src="path/to/first-image.jpg" alt="Project Visual 1" className="project-image project-image-left" />
        <img src="path/to/second-image.jpg" alt="Project Visual 2" className="project-image project-image-right" />
      </div>
      
      <div className="project-description">
        <h2>Design Approach</h2>
        <p>
          In this section, discuss the design approach taken in the project, including key inspirations,
          methods, and any unique aspects of the process.
        </p>
      </div>
      
      <div className="project-summary">
        <h2>Project Summary</h2>
        <p>
          A concluding statement about the project, summarizing its impact and any notable achievements.
        </p>
      </div>
    </div>
  );
}

export default ProjectTemplate;
