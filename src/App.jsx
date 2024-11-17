import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './styles.css';
import Project1 from './pages/Project1.jsx';
import Project2 from './pages/Project2.jsx';
import Project3 from './pages/Project3.jsx';
import Project4 from './pages/Project4.jsx';
import Project5 from './pages/Project5.jsx';
import Project6 from './pages/Project6.jsx';
import ArtAndPhotography from './pages/ArtAndPhotography.jsx'; 
// Import other project pages similarly

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
        <Route path="/art-and-photography" element={<ArtAndPhotography />} />
      </Routes>
  );
}

export default App;
