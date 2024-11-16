import ProjectTemplate from './ProjectTemplate';

function Project5() {
  return (
    <ProjectTemplate 
      title="Drone Light Painter"
      description="This is a description of Project 5."
      approach="This section details the design approach"
      layout="two-images" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: 'src/assets/imgs/test1.png', alt: 'Project Image 1' },
        { type: 'image', src: 'src/assets/imgs/test2.jpg', alt: 'Project Image 2' }
      ]}
      homePath="/"
      prevProjectPath="/project4"
      nextProjectPath="/project6"
    />
  );
}

export default Project5;
