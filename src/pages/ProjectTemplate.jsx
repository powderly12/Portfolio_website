import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './ProjectTemplate.css';

const ProjectTemplate = ({
  title,
  introduction,
  description,
  approach,
  learnings,
  mediaContent,
  layout,
  homePath = '/',
  prevProjectPath,
  nextProjectPath,
}) => {
  useEffect(() => {
    // Scroll to the top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      <h1 className="project-title">{title}</h1>
      <p className="project-intro">{introduction} <br/> {description}</p>

      {/* Media Section */}
      <div className="project-media">
        {layout === 'single-image' && mediaContent.length === 1 && (
          <div className="project-media-item">
            <img
              src={mediaContent[0].src}
              alt={mediaContent[0].alt || 'Project Image'}
              className="project-image"
            />
          </div>
        )}

        {layout === 'two-images' && mediaContent.length === 2 && (
          <div className="project-images">
            {mediaContent.map((media, index) => (
              <div key={index} className="project-media-item">
                <img
                  src={media.src}
                  alt={media.alt || `Project Image ${index + 1}`}
                  className="project-image"
                />
              </div>
            ))}
          </div>
        )}

        {layout === 'three-images' && mediaContent.length === 3 && (
          <>
            <div className="project-images">
              {mediaContent.slice(0, 2).map((media, index) => (
                <div key={index} className="project-media-item">
                  <img
                    src={media.src}
                    alt={media.alt || `Project Image ${index + 1}`}
                    className="project-image"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {layout === 'image-video' && mediaContent.length === 2 && (
          <div className="project-images">
            {mediaContent.map((media, index) =>
              media.type === 'image' ? (
                <div key={index} className="project-media-item">
                  <img
                    src={media.src}
                    alt={media.alt || `Project Image ${index + 1}`}
                    className="project-image"
                  />
                </div>
              ) : (
                <div key={index} className="project-media-item video-item">
                  <ReactPlayer
                    url={media.src}
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Design Approach Section */}
      <div className="project-description">
        <h2>Design Approach</h2>
        <p>{approach} <br/> {learnings}</p>
      </div>
      {layout === 'three-images' && mediaContent.length === 3 && (
        <div className="single-image-below">
        <img
          src={mediaContent[2].src}
          alt={mediaContent[2].alt || 'Project Image 3'}
          className="project-image"
        />
      </div>)
      }
          

      {/* Navigation Buttons */}
      <div className="project-navigation">
        {prevProjectPath && (
          <Link to={prevProjectPath} className="nav-button">
            Previous Project
          </Link>
        )}
        <Link to={homePath} className="nav-button">
          Home
        </Link>
        {nextProjectPath && (
          <Link to={nextProjectPath} className="nav-button">
            Next Project
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectTemplate;
