import './Project1.css';
import img1 from '../assets/project1_3.jpg';
import img2 from '../assets/project1_2.png';
import bgImg from '../assets/project1_1.jpg';
import { Link } from 'react-router-dom';

function Project1() {
  return (
    <div className="project1-background"
    style={{
                              backgroundImage: `url(${bgImg})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat'
                            }}
    
    >
      <div className="project1-container">
        <h1 className="project1-title">Self-Sorting Trash Bin</h1>
        <p className="project1-intro">
          My journey into engineering and design began with a passion for sustainability and a desire to solve real-world problems. For the BT Young Scientist competition, I worked with a team to create a self-sorting trash bin that could automatically separate recyclables, making sustainable choices easier for everyone.
        </p>
        <div className="project1-images">
          <img src={img1} alt="Prototype of the Self-Sorting Trash Bin" />
          <img src={img2} alt="Presentation at the Science Fair" />
        </div>
        <section className="project1-section">
          <h2>Description</h2>
          <p>
            The Self-Sorting Trash Bin was designed to identify and sort different types of waste using sensors and a custom-built mechanism. Our goal was to reduce contamination in recycling streams and encourage more people to recycle correctly. The project required us to research sorting technologies, design circuits, and build a working prototype from scratch.
          </p>
        </section>
        <section className="project1-section">
          <h2>Approach</h2>
          <p>
            We started by brainstorming and sketching ideas, then moved on to prototyping with materials like wood and acrylic. I focused on developing the sensor system, which used light refraction to detect glass bottles. Through multiple iterations, we refined the sorting mechanism and improved its reliability. Presenting our project at the national science fair was a highlight, as we received valuable feedback from judges and visitors.
          </p>
        </section>
        <section className="project1-section">
          <h2>Learnings</h2>
          <p>
            This project taught me the value of teamwork, perseverance, and iterative design. I learned how to turn an idea into a functional prototype, troubleshoot technical challenges, and communicate our vision to a broad audience. The experience inspired me to pursue engineering at Trinity College Dublin and continues to influence my approach to problem-solving today.
          </p>
        </section>
        <div className="project1-nav">
          <Link to="/">🏠 Home</Link>
          <Link to="/project2">Next Project →</Link>
        </div>
      </div>
    </div>
  );
}

export default Project1;