import './Project3.css';
import bgImg from '../assets/Project3_4.png'; // Replace with your actual image
import podImg from '../assets/Project3_3.png';
import podInterior from '../assets/Project3_5.png'; // Optional: another image
import { Link } from 'react-router-dom';

function Project3() {
  return (
    <div className="project3-background"
      style={{
                      backgroundImage: `url(${bgImg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
    >
      <div className="project3-container">
        <h1 className="project3-title">COVID-19 Meeting Pod</h1>
        <p className="project3-intro">
          During the COVID-19 pandemic, safe in-person meetings became a major challenge. As part of a university design project, I worked with a team to develop a modular, ventilated meeting pod that allowed people to collaborate face-to-face while minimizing health risks.
        </p>
        <div className="project3-images">
          <img src={podImg} alt="COVID-19 Meeting Pod Exterior" />
          <img src={podInterior} alt="COVID-19 Meeting Pod Interior" />
        </div>
        <section className="project3-section">
          <h2>Description</h2>
          <p>
            The meeting pod was designed to be easily assembled and disassembled, making it suitable for offices, schools, and public spaces. We focused on airflow, using HEPA filtration and a negative pressure system to reduce the risk of airborne transmission. The pod also featured transparent panels for visibility and communication, while maintaining a physical barrier.
          </p>
        </section>
        <section className="project3-section">
          <h2>Approach</h2>
          <p>
            Our team used rapid prototyping and iterative testing to refine the pod’s structure and ventilation. We consulted with health experts and incorporated feedback from potential users to ensure the design was both safe and practical. The final prototype balanced safety, comfort, and ease of use, and could be adapted for different environments.
          </p>
        </section>
        <section className="project3-section">
          <h2>Learnings</h2>
          <p>
            This project taught me the importance of interdisciplinary collaboration and user-centered design, especially when addressing urgent real-world problems. I gained experience in prototyping, teamwork, and communicating with stakeholders from diverse backgrounds.
          </p>
        </section>
        <div className="project3-nav">
          <Link to="/project2">← Previous Project</Link>
          <Link to="/">🏠 Home</Link>
          <Link to="/project4">Next Project →</Link>
        </div>
        <div className="project3-github-link">
          <a
            href="https://github.com/yourusername/your-meeting-pod-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            View this project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project3;