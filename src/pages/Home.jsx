import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState, useRef } from 'react';

  

function Home() {
  const [showKnowledge, setShowKnowledge] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const panelsRef = useRef(null);


  function scroll(direction) {
    if (panelsRef.current) {
      const scrollAmount = 250; // width to move each time
      panelsRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  useEffect(() => {
    const container = panelsRef.current;
    const panels = container.querySelectorAll('.project-panel');

    function updateCurve() {
      const center = container.scrollLeft + container.clientWidth / 2;
      panels.forEach(panel => {
        const panelCenter = panel.offsetLeft + panel.offsetWidth / 2;
        const distance = (panelCenter - center) / container.clientWidth; 
        // distance ~ -0.5 (far left) to +0.5 (far right)

        const curveAmount = Math.abs(distance) * 40; // pixels to move up/down
        const scale = 1 - Math.abs(distance) * 0.2; // shrink slightly on edges

        panel.style.transform = `translateY(${curveAmount}px) scale(${scale})`;
      });
    }

    updateCurve(); // run once on mount
    container.addEventListener('scroll', updateCurve);
    return () => container.removeEventListener('scroll', updateCurve);
  }, []);


  useEffect(() => {
    // Scroll to the top when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* Sky Section */}
      <section className="sky-section">
        <h1> Welcome to my Design Portfolio </h1>
        <p>This is where creativity meets functionality.<br/>
        Explore my projects below! <br/> 
        Click the cow for more of my art and photography!
        </p>
        <img src={`${import.meta.env.BASE_URL}assets/sun.png`} alt="Sun Overlay" className="sun-img" />
        <img src={`${import.meta.env.BASE_URL}assets/trees.png`} alt="Tree Overlay" className="tree-overlay" />
      </section>

      {/* Meadow Section */}
      <section className="meadow-section">
        <img src={`${import.meta.env.BASE_URL}assets/boys.png`} alt="Decorative Overlay" className="meadow-overlay-boys" />

        {/* Project Panels */}
        <div className="carousel-wrapper">
        <button className="arrow left-arrow" onClick={() => scroll(-1)}>‹</button>
        
        <div className="project-panels" ref={panelsRef}>
          <Link to="/project1" className="project-panel">
            <span>Self-Sorting Trash Bin</span>
            <img src={`${import.meta.env.BASE_URL}assets/project1.png`} alt="Project 1" className="panel-image" />
          </Link>
          <Link to="/project2" className="project-panel">
            <span>Non-Invasive Glucose Monitoring</span>
            <img src={`${import.meta.env.BASE_URL}assets/project2.png`} alt="Project 2" className="panel-image" />
          </Link>
          <Link to="/project3" className="project-panel">
            <span>COVID-19 Meeting Pod</span>
            <img src="/Portfolio_website/assets/project3.png" alt="Project 3" className="panel-image" />
          </Link>
          <Link to="/project4" className="project-panel">
            <span>AI Engine Visualisations</span>
            <img src="/Portfolio_website/assets/project5.png" alt="Project 4" className="panel-image" />
          </Link>
          <Link to="/project5" className="project-panel">
            <span>Drone Light Painter</span>
            <img src={`${import.meta.env.BASE_URL}assets/project4.png`} alt="Project 5" className="panel-image" />
          </Link>
          <Link to="/project6" className="project-panel">
            <span>Sustainable Navigation App</span>
            <img src={`${import.meta.env.BASE_URL}assets/project6_icon.png`} alt="Project 6" className="panel-image" />
          </Link>
        </div>

        <button className="arrow right-arrow" onClick={() => scroll(1)}>›</button>
        </div>

        <div className="cow-button-wrapper">
          <Link to="/art-and-photography" className="cow-container">
            <img src="/Portfolio_website/assets/cow.png" alt="Cow" className="meadow-overlay-cow" style={{ pointerEvents: 'auto' }} />
            <div className="cow-hover-message">Click to see Art & Photography!</div>
          </Link>
        </div>
      </section>

      {/* Roots Section */}
      <section className="roots-section">
        <h2>About Me</h2>
        <p>
          Hello, my name is Conor Powderly. I am 24 years old and I am currently working towards my Master's in Computer and Electronic Engineering at Trinity College Dublin. <br />
          I want to design practical solutions that enable people to enjoy life while facing their issues.<br />
        </p>

        <div className="about-container">
          <button className="knowledge-button" onClick={() => setShowKnowledge(!showKnowledge)}>
            Areas of Interest
          </button>
          <img src="/Portfolio_website/assets/headshot.png" alt="About Me Image" className="about-image" />
          <button className="connect-button" onClick={() => setShowDetails(!showDetails)}>
            Contact Details
          </button>
        </div>

        {/* Toggle Areas of Knowledge Section */}
        {showKnowledge && (
          <div className="knowledge-section">
            <h2>Areas of Interest</h2>
            <ul className="two-column-list">
              <li>Computer and Electronic Engineering (MAI)</li>
              <li>Machine Learning and AI</li>
              <li>Full-Stack App Development</li>
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
            <p>This list is always growing!</p>
          </div>
        )}

        {showDetails && (
          <div className="knowledge-section">
            <h2>Connect With Me</h2>
            <p>
              Feel free to connect with me <a href="https://www.linkedin.com/in/conor-powderly-73316b213/" target="_blank" className="Link">on LinkedIn</a> and reach out. <br />
              You can also check out the source code for this website <a href="https://github.com/powderly12/Portfolio_website" target="_blank" className="Link">on my GitHub</a> - creating it was a lot of fun, and I might have a few other projects on there!
            </p>
          </div>
        )}

        <h2>Thank you!</h2>
        <p>
          It means a lot to me that you are taking an interest in my work! <br />
        </p>
      </section>
    </div>
  );
}

export default Home;
