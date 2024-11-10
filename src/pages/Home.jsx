import { Link } from 'react-router-dom';
import './Home.css';



function Home() {
  return (
    <div className="home-container">
      {/* Sky Section */}
      <section className="sky-section">
        <h1>Welcome to My Design Portfolio</h1>
        <p>This is where creativity meets functionality. Explore my projects below!</p>
      </section>

      {/* Meadow Section */}
      <section className="meadow-section">
        <div className="flower-links">
          <Link to="/project1" className="flower-link">Project 1</Link>
          <Link to="/project2" className="flower-link">Project 2</Link>
          <Link to="/project3" className="flower-link">Project 3</Link>
          <Link to="/project4" className="flower-link">Project 4</Link>
          <Link to="/project5" className="flower-link">Project 5</Link>
          <Link to="/project6" className="flower-link">Project 6</Link>
        </div>
      </section>

      {/* Roots Section */}
      <section className="roots-section">
        <h2>About Me</h2>
        <p>
          I am a passionate designer with a background in crafting user-centered
          solutions. My roots in design are deeply connected to my love for art and functionality.
        </p>
      </section>
    </div>
  );
}

export default Home;



