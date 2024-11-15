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
        
        <img src="src\assets\sun.png" alt="Decorative Overlay" className="sun-img" />
          
        <img src="src\assets\trees.png" alt="Decorative Overlay" className="tree-overlay" />
      
      </section>

      {/* Meadow Section */}
      <section className="meadow-section">
        <img src="src\assets\boys.png" alt="Decorative Overlay" className="meadow-overlay-boys" />
        
       
        {/* Flower Links */}
        <div className="flower-links">
          <Link to="/project1" className="flower-link">
            <span>Self Sorting Trash Bin</span>
            <div className="flower-img" />
          </Link>
          <Link to="/project2" className="flower-link">
            <span>Non-Invasive Glucose Monitoring</span>
            <div className="flower-img" />
          </Link>
          <Link to="/project3" className="flower-link">
            <span>COVID 19 Meeting Pod</span>
            <div className="flower-img" />
          </Link>
          <Link to="/project4" className="flower-link">
            <span>Drone Light Painter</span>
            <div className="flower-img" />
          </Link>
          <Link to="/project5" className="flower-link">
            <span>Dynamic Pricing System</span>
            <div className="flower-img" />
          </Link>
          <Link to="/project6" className="flower-link">
            <span>Matrix Multiplication Animations</span>
            <div className="flower-img" />
          </Link>
        </div>
        
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
        <h2>Areas of Knowledge</h2>
      <ul className="two-column-list">
        <li>Computer and Electronic Engineering (MAI)</li>
        <li>Machine Learning and AI</li>
        <li>Full Stack App Development</li>
        <li>Web Development</li>
        <li>Quantum Computing</li>
        <li>Computer Hardware and Hardware Design</li>
        <li>Autonomous Vehicles</li>
        <li>Life Cycle Assessment</li>
        <li>Construction</li>
        <li>Animation</li>
        <li>Photoshop</li>
        <li>Art History</li>
        <li>Rugby</li>
        <li>Costume Design</li>
      </ul>
        <p>… this list is always growing!</p>
        <h2>Thank you!</h2>
        <p>
        It means a lot to me that you are taking an interest in my work! <br />
        Feel free to connect with me <a href="https://www.linkedin.com/in/conor-powderly-73316b213/" target="_blank" className="Link"> on LinkedIn</a> and reach out. <br />
        You can also check out the source code for this website <a href="https://github.com/powderly12/Portfolio_website" target="_blank" className="Link"> on my Github</a> making it was a lot of fun and I might have a few other projects on there! <br />
        </p>

      </section>
    </div>
  );
}

export default Home;
