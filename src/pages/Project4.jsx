import ProjectTemplate from './ProjectTemplate';

function Project3() {
  return (
    <ProjectTemplate
      title="Hipeac Workshop Animations"
      description="This is a description of Project 3."
      approach="This section details the design approach."
  
      layout="image-video" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: 'src/assets/MatrixMult-gif.gif', alt: 'Project Image' },
        { type: 'video', src: 'https://www.youtube.com/watch?v=QKZz4HdOn7E&t=2s' }
      ]}
  
      homePath="/"
      prevProjectPath="/project3"
      nextProjectPath="/project5"
    />
  );
}

export default Project3;
