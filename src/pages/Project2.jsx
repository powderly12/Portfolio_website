import ProjectTemplate from './ProjectTemplate';

function Project2() {
  return (
    <ProjectTemplate 
      title="Non-Invasive Glucose Monitor"
      introduction="Growing up I did gymnastics, where on of the younger kids had diabetes. He would often have to take breaks to get his levels glucose level checked which involved pricking his finger."
      description="Years later during my first year of college we were asked to create an innovation in the healthcare domain, and I saw this as an opportunity look into this issue. In this project I work as part of a team of five to develop a glucose monitor which would scan the blood vessels in a person’s eye in order to read their glucose levels."

      approach="As part of this project I worked as part of a team using AutoCAD to prototype out ideas, eventually settling on the model you see above. We meet the technical limitation of this idea was in the signal processing. There was not a good way to process the signal captured by the proposed for our sensor,... well not good way yet!"
      Learnings =" This project was so inspiring to work, and it helped me decided to focus on electronic and computer engineering for the rest of my time at Trinity College. This is the area that would help provide practical functionality to my designs."      


layout="single-image" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project2_2.png', alt: 'Glucose Monitor' },
      ]}
homePath="/"
prevProjectPath="/project1"
nextProjectPath="/project3"
      
    />
  );
}

export default Project2;
