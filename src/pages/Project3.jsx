import ProjectTemplate from './ProjectTemplate';

function Project3() {
  return (
    <ProjectTemplate 
      title="COVID-19 Meeting Pod"
      description="During the COVID-19 pandemic, Ireland restricted socialization to small groups. This left many people separated from loved ones."
      approach="I worked as part of a team to design and prototype our COVID socialization pod. This role required me to quickly sketch design prototypes to explain my ideas or point out problems we encountered. My favorite design was a pod that connected to the door frame of a person’s home and allowed the pod to expand outward if the weather was nice or inward into the home. I took inspiration from Japanese origami when designing the pod, so it could be moved easily."
      learnings="For this project, I kept a detailed design journal that really helped organize my ideas. I learned how to design, adapt, and prototype quickly to meet unforeseen scenarios, such as a reduced supply chain for materials. It felt good to work on something that could bring people together during such a lonely time."
      layout="three-images"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project3_2.png', alt: 'COVID-19 Meeting Pod Design' },
        { type: 'image', src: '/Portfolio_website/assets/project3_3.png', alt: 'COVID-19 Meeting Pod Prototype' },
        { type: 'image', src: '/Portfolio_website/assets/project3_4.png', alt: 'COVID-19 Meeting Pod in Use' }
      ]}
      homePath="/"
      prevProjectPath="/project2"
      nextProjectPath="/project4"
    />
  );
}

export default Project3;
