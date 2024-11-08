import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/project1">Project 1</Link>
      <Link to="/project2">Project 2</Link>
      {/* Add other project links */}
    </nav>
  );
}

export default Navbar;
