import './Project2.css';
import glucoseImg1 from '../assets/Project2_2.png'; // Replace with your actual image
import glucoseImg2 from '../assets/Project2_3.png'; // Optional: another image
import bgImg from '../assets/healthbackground.png';
import { Link } from 'react-router-dom';

function Project2() {
  return (
    <div className="project2-background"
    style={{
                          backgroundImage: `url(${bgImg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
    >
      <div className="project2-container">
        <h1 className="project2-title">Non-Invasive Glucose Monitoring</h1>
        <p className="project2-intro">
          Diabetes management often requires frequent blood glucose checks, which can be uncomfortable and inconvenient. For my second-year engineering project, I explored a non-invasive approach to glucose monitoring, aiming to make life easier for people with diabetes.
        </p>
        <div className="project2-images">
          <img src={glucoseImg1} alt="Prototype of Non-Invasive Glucose Monitor" />
          <img src={glucoseImg2} alt="Sensor Testing Setup" />
        </div>
        <section className="project2-section">
          <h2>Description</h2>
          <p>
            The project focused on developing a wearable device that could estimate blood glucose levels using optical sensors and machine learning algorithms. The prototype used near-infrared light to analyze skin reflectance, correlating the data with glucose concentrations.
          </p>
        </section>
        <section className="project2-section">
          <h2>Approach</h2>
          <p>
            I built several prototypes, experimenting with different sensor placements and wavelengths. Data was collected from volunteers and processed using Python to train a regression model. The device was designed to be comfortable, discreet, and easy to use, with wireless data transmission to a mobile app for real-time monitoring.
          </p>
        </section>
        <section className="project2-section">
          <h2>Learnings</h2>
          <p>
            This project taught me about biomedical engineering, signal processing, and the challenges of working with real-world biological data. I gained hands-on experience in hardware prototyping, data analysis, and user-centered design, and developed a deeper appreciation for the impact of engineering on healthcare.
          </p>
        </section>
        <div className="project2-nav">
          <Link to="/project1">← Previous Project</Link>
          <Link to="/">🏠 Home</Link>
          <Link to="/project3">Next Project →</Link>
        </div>
      </div>
    </div>
  );
}

export default Project2;