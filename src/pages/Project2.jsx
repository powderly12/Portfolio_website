import ProjectTemplate from './ProjectTemplate';

function Project2() {
  return (
    <ProjectTemplate 
      title="Non-Invasive Glucose Monitor"
      introduction="As a child in gymnastics, I noticed one of the younger kids with diabetes constantly pausing to check his glucose levels. Watching him prick his finger each time was unsettling—it seemed unnecessarily uncomfortable for a kid to endure regularly. Even then, I wondered if there could be a better way."
      description="During my first year of college, we were assigned to create an innovation in healthcare, and I saw this as an opportunity to revisit the idea of a less invasive glucose monitoring method. Working as part of a team of five, we set out to design a monitor that could measure glucose levels by scanning the blood vessels in the eye. Our goal was to provide a painless, efficient alternative for glucose monitoring."
      approach="Our design process began with in-depth research on existing technologies and their limitations. We used AutoCAD to prototype our ideas and iterated frequently based on what we learned. Eventually, we arrived at the model you see here. One of the biggest challenges we faced was the signal processing required for the proposed sensor. Current technology didn’t yet offer a reliable way to process the data from our sensor effectively. While this was a limitation, it also reinforced the importance of continually iterating and innovating to push the boundaries of feasibility."
      learnings="This project was both challenging and inspiring. It deepened my understanding of how technical and design challenges intersect in healthcare innovation. Although we didn’t solve all the issues, the experience taught me the value of perseverance and creative problem-solving. It also inspired me to specialize in electronic and computer engineering at Trinity College, as these disciplines provide the tools needed to bring practical functionality to ambitious designs like this one."
      layout="two-images"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project2_2.png', alt: 'Non-Invasive Glucose Monitor Prototype' },
        { type: 'image', src: '/Portfolio_website/assets/project2_3.png', alt: 'Conceptual Design of Glucose Monitoring System' },
      ]}
      homePath="/"
      prevProjectPath="/project1"
      nextProjectPath="/project3"
    />
  );
}

export default Project2;
