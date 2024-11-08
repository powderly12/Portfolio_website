import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to My Design Portfolio</h1>
        <p>Discover my projects and design journey below!</p>
      </header>
      <section className="projects-grid">
        <Link to="/project1" className="project-button">
          <img src="src\assets\imgs\image.png" alt="Project 1" className="project-image" />
          <span>Project 1</span>
        </Link>
        <Link to="/project2" className="project-button">
          <img src="src\assets\imgs\image.png" alt="Project 2" className="project-image" />
          <span>Project 2</span>
        </Link>
        <Link to="/project3" className="project-button">
          <img src="src\assets\imgs\image.png" alt="Project 3" className="project-image" />
          <span>Project 3</span>
        </Link>
        <Link to="/project4" className="project-button">
          <img src="src\assets\imgs\image.png" alt="Project 4" className="project-image" />
          <span>Project 4</span>
        </Link>
        <Link to="/project5" className="project-button">
          <img src="src\assets\imgs\image.png" alt="Project 5" className="project-image" />
          <span>Project 5</span>
        </Link>
        <Link to="/project6" className="project-button">
          <img src="src\assets\imgs\image.png" alt="Project 6" className="project-image" />
          <span>Project 6</span>
        </Link>
      </section>
    </div>
  );
}

export default Home;

