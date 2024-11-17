import ProjectTemplate from './ProjectTemplate';

function Project3() {
  return (
    <ProjectTemplate 
      title="COVID 19 Meeting Pod"
      description="During the Covid 19 pandemic Ireland restricted socialisation between people to be within small. This left many people separated from loved ones. "

      approach="I worked as part of a team to design and prototype our covid socialisation Pod. This role required me to quickly stetch design prototype to explain my designs or point out problems we encountered.  My favourite design was a pod that connected to the door frame of a person door and allowed person the pod to expand outward if the weather was nice or inwards into a persons home.  I took inspiration from Japanese origami when designing the pod so it could be moved in an easy manner."
      learnings="For this project I kept a detailed design journal that really helped to organise my idea. I learned how to design, react, and prototype in a fast nature to meet unforeseen scenerios. It felt good to work on something that could bring people together during such a lonely time."
      layout= "three-images"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project3_2.png', alt: 'Project Image 1' },
        { type: 'image', src: '/Portfolio_website/assets/project3_3.png', alt: 'Project Image 2' },
        { type: 'image', src: '/Portfolio_website/assets/project3_4.png', alt: 'Project Image 3' }
      ]}
      homePath="/"
      prevProjectPath="/project2"
      nextProjectPath="/project4"
    />
  );
}

export default Project3;
