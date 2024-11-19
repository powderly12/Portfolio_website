import ProjectTemplate from './ProjectTemplate';

function Project2() {
  return (
    <ProjectTemplate 
      title="Non-Invasive Glucose Monitor"
      introduction="Growing up, I did gymnastics, where one of the younger kids had diabetes. He would often have to take breaks to get his glucose levels checked, which involved pricking his finger. This seemed very uncomfortable for a kid to have to go through."
      description="Years later, during my first year of college, we were asked to create an innovation in the healthcare domain, and I saw this as an opportunity to look into this issue. In this project, I worked as part of a team of five to develop a glucose monitor that would scan the blood vessels in a person’s eye to read their glucose levels."
      approach="As part of this project, I worked with my team using AutoCAD to prototype ideas, eventually settling on the model you see above. We encountered a significant technical limitation with the signal processing for this idea. There wasn’t an effective way to process the signal captured by our proposed sensor... well, not an effective way yet!"
      learnings="This project was so inspiring to work on, and it helped me decide to focus on electronic and computer engineering for the rest of my time at Trinity College. This is the area that would help provide practical functionality to my designs."
      layout="two-images"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project2_2.png', alt: 'Glucose Monitor Prototype' },
        { type: 'image', src: '/Portfolio_website/assets/project2_3.png', alt: 'Glucose Monitoring Concept' },
      ]}
      homePath="/"
      prevProjectPath="/project1"
      nextProjectPath="/project3"
    />
  );
}

export default Project2;
