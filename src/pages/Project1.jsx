import ProjectTemplate from './ProjectTemplate';

function Project1() {
  return (
    <ProjectTemplate
      title="Self-Sorting Trash Bin"
      introduction="Designing solutions to real-world problems has always been my way of making a positive impact, especially in areas that align with sustainability."
      description="The Self-Sorting Trash Bin was a pivotal project in my journey as a designer. Developed for the BT Young Scientist competition, Ireland’s national science fair, this project was born from a desire to make sustainable choices effortless for everyone. Working as part of a team of three, we set out to design a bin that could automatically sort its own trash. This ambitious goal required a strong focus on the design process to bring our idea to life."
      approach="Our design process involved extensive brainstorming, prototyping, and iterating. We started by breaking the problem into smaller components: identifying sorting mechanisms, selecting materials, and designing circuits. My primary responsibility was building a working prototype to demonstrate the feasibility of our concept. Using a wooden frame and a circuit capable of detecting light refraction angles, we created a sorting mechanism for glass bottles. Each iteration of the prototype brought us closer to understanding how the design could be improved."
      learnings="This project was a transformative experience for me. Collaborating with my team taught me how to refine ideas through iteration, overcome technical challenges, and translate concepts into functional designs. Participating in the competition also gave me exposure to a diverse range of ideas and creative minds, as well as the opportunity to meet Irish celebrities and politicians. Inspired by this experience, I pursued engineering at Trinity College Dublin to deepen my technical skills and continue my journey of turning impactful ideas into reality."
      layout="three-images" 
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project1_3.png', alt: 'Prototype of the Self-Sorting Trash Bin' },
        { type: 'image', src: '/Portfolio_website/assets/project1_2.png', alt: 'Close-up of Glass Sorting Mechanism' },
        { type: 'image', src: '/Portfolio_website/assets/project1_4.png', alt: 'Presentation at the Science Fair' },
      ]}
      homePath="/"
      nextProjectPath="/project2"
    />
  );
}

export default Project1;
