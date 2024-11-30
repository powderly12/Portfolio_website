import ProjectTemplate from './ProjectTemplate';

function Project4() {
  return (
    <ProjectTemplate
      title="HiPEAC Workshop Animations"
      description="After my third year in college, I decided I wanted to gain some experience, so I took an internship with AMD, a multinational semiconductor company with its European headquarters in Dublin. I worked on several projects during my time there, but my favorite project was helping to deliver a workshop at the HiPEAC hardware conference in Toulouse, France."
      approach="For this project, I was in charge of creating a way to explain how AMD's AI engines perform matrix multiplications, an operation essential for AI models. A lot of user testing was involved in this process, and animations proved to be the best way to convey this concept. It was a great way to explain something complex—sometimes words just get in the way!"
      learnings="Above, you can see examples of the final animations for basic matrix multiplication and an interview I did for the HiPEAC organizers. Through this experience, I gained a deep appreciation for how important communication is in design. This project inspired me to become a teaching assistant at Trinity College, where I worked to understand how to effectively share technical ideas to achieve clarity and understanding."
      layout="image-video"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/matrixMult-gif.gif', alt: 'Matrix Multiplication Animation' },
        { type: 'video', src: 'https://www.youtube.com/watch?v=QKZz4HdOn7E&t=2s' }
      ]}
      homePath="/"
      prevProjectPath="/project3"
      nextProjectPath="/project5"
    />
  );
}

export default Project4;
