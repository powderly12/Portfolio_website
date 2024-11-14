import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Sky Section */}
      <section className="sky-section">
        <h1>Welcome to My Design Portfolio</h1>
        <p>This is where creativity meets functionality. Explore my projects below!</p>

        {/* Sun Element */}
        <div className="sun">
          <div className="sun-overlay"></div>
        </div>
        <img src="src\assets\trees.png" alt="Decorative Overlay" className="tree-overlay" />
      
      </section>

      {/* Meadow Section */}
      <section className="meadow-section">
        <img src="src\assets\boys.png" alt="Decorative Overlay" className="meadow-overlay-boys" />
        {/*
        <div className="flower-links">
          <Link to="/project1" className="flower-link">
            <span>Self Sorting Trash Bin</span>
            <img src="src\assets\imgs\test1.png" alt="Project 1" />
          </Link>
          <Link to="/project2" className="flower-link">
            <span>Non-Invasive Glucose Monitoring</span>
            <img src="path/to/image2.jpg" alt="Project 2" />
          </Link>
          <Link to="/project3" className="flower-link">
            <span>COVID 19 Meeting Pod</span>
            <img src="path/to/image3.jpg" alt="Project 3" />
          </Link>
          <Link to="/project4" className="flower-link">
            <span>Drone Light Painter</span>
            <img src="path/to/image4.jpg" alt="Project 4" />
          </Link>
          <Link to="/project5" className="flower-link">
            <span>Dynamic Pricing System</span>
            <img src="path/to/image5.jpg" alt="Project 5" />
          </Link>
          <Link to="/project6" className="flower-link">
            <span>Matrix Multiplation Animations</span>
            <img src="path/to/image6.jpg" alt="Project 6" />
          </Link>
        </div>*/}
        <img src="src\assets\cow.png" alt="Decorative Overlay" className="meadow-overlay" />
      </section>

      {/* Roots Section */}
      <section className="roots-section">
        <h2>About Me</h2>
        <p>
          I want to designs solutions that bring put people's feet back on the ground.
          
        </p>
      </section>
    </div>
  );
}

export default Home;
