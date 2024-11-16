import ProjectTemplate from './ProjectTemplate';

function Project6() {
  return (
    <ProjectTemplate 
      title="Roots - The Sustainable Wayfinding App"
      description="This is a description of Project 6."
      approach="This section details the design approach"
      
      layout="two-images" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: 'src/assets/imgs/test1.png', alt: 'Project Image 1' },
        { type: 'image', src: 'src/assets/imgs/test2.jpg', alt: 'Project Image 2' }
      ]}
      homePath="/"
      prevProjectPath="/project5"
    />
  );
}

export default Project6;
