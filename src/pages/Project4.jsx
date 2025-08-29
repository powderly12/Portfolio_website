import './Project4.css';
import matrixGif from '../assets/matrixMult-gif.gif';
import bgImg from '../assets/siliconwafer.jpg';
import { Link } from 'react-router-dom';

function Project4() {
  return (
    <div className="project4-background"
      style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
    
    >
      <div className="project4-container">
        <h1 className="project4-title">HiPEAC Workshop Animations</h1>
        <p className="project4-intro">
          After my third year in college, I sought practical experience and joined AMD, a multinational semiconductor company with its European headquarters in Dublin. During my internship, I worked on several exciting projects, but my favorite was contributing to a workshop for the HiPEAC hardware conference in Toulouse, France.
        </p>
        <div className="project4-media">
          <img src={matrixGif} alt="Matrix Multiplication Animation" />
          <div className="project4-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/QKZz4HdOn7E?start=2"
              title="HiPEAC Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <section className="project4-section">
          <h2>Description</h2>
          <p>
            This project combined technical problem-solving with creative design, allowing me to explore how to communicate complex ideas effectively. The core challenge was explaining how AMD's AI engines perform matrix multiplications, a foundational operation in AI models.
          </p>
        </section>
        <section className="project4-section">
          <h2>Approach</h2>
          <p>
            To tackle this, I led the design of animations that would simplify the concept for a diverse audience. The process involved extensive user testing to identify the most effective way to communicate the topic. Early iterations included diagrams and written explanations, but I found that animations provided the clarity and accessibility we needed. By visually representing complex processes, the animations removed potential barriers created by technical jargon and made the concept intuitive and engaging.
          </p>
        </section>
        <section className="project4-section">
          <h2>Learnings</h2>
          <p>
            This project deepened my understanding of how communication and design go hand in hand. Creating these animations required me to think critically about the user's perspective, ensuring that even complex ideas could be easily understood. Inspired by this experience, I became a teaching assistant at Trinity College, where I honed my ability to present technical concepts in a clear and impactful way.
          </p>
        </section>
        <div className="project4-nav">
          <Link to="/project3">← Previous Project</Link>
          <Link to="/">🏠 Home</Link>
          <Link to="/project5">Next Project →</Link>
        </div>
      </div>
    </div>
  );
}

export default Project4;