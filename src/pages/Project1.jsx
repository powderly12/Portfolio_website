import ProjectTemplate from './ProjectTemplate';

function Project1() {
  return (
    <ProjectTemplate
      title="Self-Sorting Trash Bin"
      introduction="I want to make a positive impact on our environment over my lifespan."
      description="One of my first attempts at doing so was designing a project for the BT Young Scientist competition, which is Ireland’s national science fair. This was a decisive point in my journey so far. I worked as part of a team of three students to develop bins that would sort their own trash. The project was inspired by the idea of making sustainable choices as seamless as possible."
      approach="The design process involved many iterations as we learned more about the complexities of bringing an idea to reality. One of my tasks in this project was building a prototype to showcase this idea. The prototype was a wooden box with some electronic circuits to detect the light refraction angles for sorting glass bottles."
      learnings="This experience was amazing! We got to meet creative students from all over the country as well as some Irish celebrities and politicians. This project inspired me to gain more technical experience so I can bring my ideas to life, which is how I ended up studying engineering at Trinity College Dublin."
      layout="three-images" 
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project1_3.png', alt: 'Trash Bin Prototype' },
        { type: 'image', src: '/Portfolio_website/assets/project1_2.png', alt: 'Glass Sorting Mechanism' },
        { type: 'image', src: '/Portfolio_website/assets/project1_4.png', alt: 'Science Fair Photo' },
      ]}
      homePath="/"
      nextProjectPath="/project2"
    />
  );
}

export default Project1;
