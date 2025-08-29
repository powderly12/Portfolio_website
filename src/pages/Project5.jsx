import './Project5.css';
import img1 from '../assets/imgs/test1.png';
import img2 from '../assets/imgs/test2.jpg';
import bgImg from '../assets/blurred-night-lights.jpg';
import { Link } from 'react-router-dom';

function Project5() {
  return (
    <div className="project5-background"
    style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
    >
      <div className="project5-container">
        <h1 className="project5-title">Drone Light Painter</h1>
        <p className="project5-intro">
          Combining my passion for photography with engineering, I set out to explore light painting using drones. Light painting is a photographic technique where moving lights are captured during long exposures, creating stunning visual effects. My goal was to bring precision and creativity together by developing a system where a drone could trace custom paths in the air, painting with light in three different colors.
        </p>
        <div className="project5-images">
          <img src={img1} alt="Graphical User Interface for Drone Light Painter" />
          <img src={img2} alt="Light Painting Path Traced by Drone" />
        </div>
        <section className="project5-section">
          <h2>Description</h2>
          <p>
            I developed a system using a Crazyflie drone and a custom Python-based graphical user interface (GUI). The GUI allows users to draw a path, which the drone then follows, changing its LED colors as it moves. This approach brought consistency and precision to the art of light painting, enabling the creation of complex and repeatable patterns.
          </p>
        </section>
        <section className="project5-section">
          <h2>Approach</h2>
          <p>
            This was my first time working with drones, so I focused on iterative design and testing. I built the GUI in Python, allowing for real-time path drawing and color selection. The drone's firmware was modified to interpret the path data and control the LEDs. Through repeated testing and debugging, I improved the accuracy of the drone's movements and the smoothness of the resulting images.
          </p>
        </section>
        <section className="project5-section">
          <h2>Learnings</h2>
          <p>
            This project was a great opportunity to merge creativity and technology. I learned about drone control, GUI development, and the importance of iterative experimentation. The experience reinforced my belief in the value of combining engineering with artistic expression, and I look forward to refining this system further.
          </p>
        </section>
        <div className="project5-nav">
          <Link to="/project4">← Previous Project</Link>
          <Link to="/">🏠 Home</Link>
          <Link to="/project6">Next Project →</Link>
        </div>
        <div className="project5-github-link">
          <a
            href="https://github.com/powderly12/Drone_Light_Painter/tree/GUI"
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

export default Project5;