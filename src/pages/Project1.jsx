import ProjectTemplate from './ProjectTemplate';

function Project1() {
  return (
    <ProjectTemplate 
      title="Project 1"
      description="This is a description of Project 1."
      projectImage="src/assets/imgs/test1.png"
      approach="This section details the design approach"
      media="src/assets/imgs/test2.jpg" // Adjust paths accordingly
    />
  );
}

export default Project1;

