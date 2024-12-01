import ProjectTemplate from './ProjectTemplate';

function Project3() {
  return (
    <ProjectTemplate 
      title="COVID-19 Meeting Pod"
      description="The COVID-19 pandemic brought with it unprecedented challenges, including strict restrictions on socialization in Ireland. These measures left many people separated from their loved ones, creating a profound sense of isolation. In response to this, our team set out to design a solution that would safely facilitate face-to-face interactions while adhering to public health guidelines."
      approach="The design process for the COVID-19 Meeting Pod involved rapid prototyping, problem-solving, and creative iteration. As a member of the team, my role was to quickly sketch design ideas to communicate concepts and troubleshoot challenges. One of my favorite designs was a pod that connected to the door frame of a person’s home and could expand outward in good weather or inward for indoor use. This design drew inspiration from Japanese origami, allowing the pod to fold and move easily. The lightweight and flexible structure made it adaptable to various spaces and conditions, which was critical during a time of supply chain uncertainties."
      learnings="This project was a significant learning experience for me. Keeping a detailed design journal helped me refine my ideas and track how they evolved throughout the project. I learned to design, adapt, and prototype quickly to address unforeseen constraints, such as limited material availability. More importantly, this project reminded me of the emotional impact design can have—bringing people together during such a lonely and challenging time was incredibly rewarding. The experience reinforced my belief in the power of design to address both practical and emotional needs."
      layout="four-images"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project3_2.png', alt: 'Conceptual Design of COVID-19 Meeting Pod' },
        { type: 'image', src: '/Portfolio_website/assets/project3_3.png', alt: 'Prototype of COVID-19 Meeting Pod' },
        { type: 'image', src: '/Portfolio_website/assets/project3_4.png', alt: 'COVID-19 Meeting Pod in Use' },
        { type: 'image', src: '/Portfolio_website/assets/project3_5.png', alt: 'COVID-19 Meeting Pod in Use' }
      ]}
      homePath="/"
      prevProjectPath="/project2"
      nextProjectPath="/project4"
    />
  );
}

export default Project3;
