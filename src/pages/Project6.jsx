
import './Project6.css';
import bgImg from '../assets/Navigationbackground.png';
import img1 from '../assets/project6_updated_1.jpg';
import img2 from '../assets/project6_updated_2.jpg';
import img3 from '../assets/project6_updated_3.jpg';
import { Link } from 'react-router-dom';

function Project6() {
  return (
    <div className="project6-background" 
    style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <div className="project6-container" >
      <h1 className="project6-title">Roots - The Sustainable Wayfinding App</h1>
      <p className="project6-intro">
        According to the Irish Environmental Protection Agency, road transport accounted for 21.5% of Ireland's greenhouse gas emissions in 2023. This underlines the importance of promoting sustainable transport alternatives such as rail and bus over private car use. To address this, as part of the Advanced Software Engineering module, my team and I developed Roots - a navigation app that helps users consider their environmental impact while staying connected with friends.
      </p>
      <div className="project6-images">
        <img src={img1} alt="Prototype of the Self-Sorting Trash Bin" />
        <img src={img2} alt="Close-up of Glass Sorting Mechanism" />
        <img src={img3} alt="Presentation at the Science Fair" />
      </div>
      <section className="project6-section">
        <h2>Description</h2>
        <p>
          I collaborated with six other Master's students using the Extreme Programming (XP) methodology. We produced detailed UML use-case, functional, and technical diagrams, and implemented the app with a React frontend and a Python backend, connected to a Postgres database hosted on DigitalOcean. CI/CD pipelines were maintained on GitHub with automated unit testing (pytest and Jest). Working in two-week sprints, each member contributed across the full stack, encouraging collective code ownership and a shared understanding of the system.
        </p>
      </section>
      <section className="project6-section">
        <h2>Approach</h2>
        <p>
          For me, this project feels like a full-circle moment. When I designed the self-sorting bins for the National Science Fair, my goal was to make eco-friendly choices easier for people. At the time, I lacked the technical skills to bring my ideas fully to life. Now, with my engineering background and a collaborative team, I can approach these challenges with a deeper skill set and a shared vision.  The final app allowed users to track carbon savings when choosing public transport over private cars, compare their performance with friends on a sustainability leader board, access Dublin bike, weather and crowdsourced real-time information and work towards milestones for adopting more eco-friendly transport habits.
        </p>
      </section>
      <section className="project6-section">
        <h2>Learnings</h2>
        <p>
          I gained experience in UI design, API integration (Dublin Bikes, weather, Google Directions), encryption, SQL, prototyping, testing, and system design. The project achieved a 95% (First Class Honours), the highest grade awarded that year.
        </p>
      </section>
      <div className="project6-nav">
      <Link to="/project5">← Previous Project</Link>
      <Link to="/">🏠 Home</Link>
      </div>

      <div className="project6-github-link">
        <a
          href="https://github.com/AdvancedSoftwareEngineeringGroup3/AdvancedSoftwareEngineering-Group3"
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

export default Project6;