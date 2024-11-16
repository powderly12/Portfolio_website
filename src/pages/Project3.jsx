import ProjectTemplate from './ProjectTemplate';

function Project3() {
  return (
    <ProjectTemplate 
      title="COVID 19 Meeting Pod"
      description="During the Covid 19 pandemic Ireland restricted socialistic between people to be within small groups of the same people. This left many people separated from loved ones. "

      approach="I worked as part of a team to design and prototype our covid socialisation Pod. This role required me to quickly stetch design prototype to explain my designs or point out problems we encountered. This pr.  My favourite design was a pod that connected to the door frame of a person door and allowed person the pod to expand outward if the weather was nice or inwards into a persons home."
      layout= "three-images"
      mediaContent={[
        { type: 'image', src: 'src/assets/project3_2.png', alt: 'Project Image 1' },
        { type: 'image', src: 'src/assets/project3_3.png', alt: 'Project Image 2' },
        { type: 'image', src: 'src/assets/project3_3.png', alt: 'Project Image 3' }
      ]}
      homePath="/"
      prevProjectPath="/project2"
      nextProjectPath="/project4"
    />
  );
}

export default Project3;
