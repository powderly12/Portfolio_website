import React from 'react';
import { Link } from 'react-router-dom';
import './arttemplate.css';

const ArtAndPhotography = () => {
  const images = [
    { src: '/Portfolio_website/assets/photo3.jpg', caption: 'Oil painting of boys and cows' },
    { src: '/Portfolio_website/assets/photo1.jpg', caption: 'Photo of northern Italy' },
    { src: '/Portfolio_website/assets/photo7.jpg', caption: 'Painting of friends during COVID' },
    { src: '/Portfolio_website/assets/photo2.jpg', caption: 'Brainstorming for art portfolio' },
    { src: '/Portfolio_website/assets/photo9.jpg', caption: 'Photo of friends' },
    { src: '/Portfolio_website/assets/photo6.jpg', caption: 'Still life in mixed mediums' },
    { src: '/Portfolio_website/assets/photo4.jpg', caption: 'Brainstorming for the sculpture' },
    { src: '/Portfolio_website/assets/photo8.png', caption: 'Mountain lake' },
    { src: '/Portfolio_website/assets/photo5.jpg', caption: 'Sculpture' },
  ];

  return (
    <div className="project-container">
      <h1 className="project-title">Art and Photography</h1>
      <p className="project-intro">
        Art and photography are the best ways I’ve found to express what I feel as I go through life. <br />
        My subjects are often friends, family, or myself. <br />
        Below, I’ve collected some of my favorite photographs, oil paintings, drawings, and sculptures I’ve created, along with their development sheets. <br />
        I hope you enjoy!
      </p>
      <section className="image-grid">
        {images.map((item, index) => (
          <div className="image-grid-item" key={index}>
            <img src={item.src} alt={item.caption} />
            <div className="image-caption">{item.caption}</div>
          </div>
        ))}
      </section>
      <footer>
        <Link to="/" className="return-home-button">
          Return to Home
        </Link>
      </footer>
    </div>
  );
};

export default ArtAndPhotography;
