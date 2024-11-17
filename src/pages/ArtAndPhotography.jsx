import React from 'react';
import { Link } from 'react-router-dom';
import './arttemplate.css';

const ArtAndPhotography = () => {
  const images = [
    { src: '/Portfolio_website/assets/photo3.jpg', caption: 'Oil painting of Boys and Cows',aspectRatio: 16/9 },
    { src: '/Portfolio_website/assets/photo1.jpg', caption: 'Photo from Northern Italy',aspectRatio: 4/3 },
    { src: '/Portfolio_website/assets/photo7.jpg', caption: 'Painting of Friends During Covid',aspectRatio: 1/1 },
    { src: '/Portfolio_website/assets/photo2.jpg', caption: 'Brainstorming for Art Portfolio',aspectRatio: 3/4 },
    { src: '/Portfolio_website/assets/photo9.jpg', caption: 'Photo of friends',aspectRatio: 16/9  },
    { src: '/Portfolio_website/assets/photo6.jpg', caption: 'Still Life in Mix Meduims',aspectRatio: 4/3 },
    { src: '/Portfolio_website/assets/photo4.jpg', caption: 'Brainstorming for the Sculpture',aspectRatio: 1/1  },
    { src: '/Portfolio_website/assets/photo8.png', caption: 'Mountain Lake', aspectRatio: 3/4 },
    { src: '/Portfolio_website/assets/photo5.jpg', caption: 'Sculpture', aspectRatio: 16/9 },
  ];


  return (
    <div className="project-container">
      <h1 className="project-title">Art and Photography</h1>
      <div className="image-grid">
        {images.map((item, index) => (
          <div className="image-grid-item" key={index}>
            <img src={item.src} alt={item.caption} />
            <div className="image-caption">{item.caption}</div>
          </div>
        ))}
      </div>
      <Link to="/" className="return-home-button">
        Return to Home
      </Link>
    </div>
  );
};

export default ArtAndPhotography;
