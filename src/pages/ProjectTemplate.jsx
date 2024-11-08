import { useParams } from 'react-router-dom';
import './ProjectTemplate.css';

function ProjectTemplate({ title, description, projectImage, approach, media }) {
  return (
    <div className="project-template-container">
      <h1 className="project-title">{title}</h1>
      
      <section className="project-description">
        <p>{description}</p>
      </section>

      <div className="project-image-container">
        <img src={projectImage} alt={`${title} screenshot`} className="project-image" />
      </div>

      <section className="design-approach">
        <h2>Design Approach</h2>
        <p>{approach}</p>
      </section>

      <div className="project-media-container">
        <img src={media} alt={`${title} media`} className="project-media" />
      </div>
    </div>
  );
}

export default ProjectTemplate;

