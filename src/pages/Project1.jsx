import ProjectTemplate from './ProjectTemplate';

function Project1() {
  return (
    <ProjectTemplate
      title="Self Sorting Trash Bin"
      description="Designing a project for the BT young scientist competition, which is Ireland’s national Science fair, was a decisive point in my journey so far. I worked as part of a team of three students to develop bins that would sort their own trash. The project was inspired by the idea of making sustainable choices as seamless as possible."
      approach="One of my tasks in this project was building a prototype to showcase this idea. The prototype was a wooden box with some electronic circuits to detect the light refraction angles for sorting materials."
      layout="two-images" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project1_2.png', alt: 'Trash Bin Prototype' },
        { type: 'image', src: '/Portfolio_website/assets/project1_2.png', alt: 'Glass Sorting Mechanism' },
      ]}
      homePath="/"
      prevProjectPath="/project0"
      nextProjectPath="/project2"
    />
  );
}

export default Project1;

