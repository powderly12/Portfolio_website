import ProjectTemplate from './ProjectTemplate';

function Project3() {
  return (
    <ProjectTemplate
      title="HiPEAC Workshop Animations"
      description="After my third year in college, I decided I wanted to get some experience, so I took an internship with AMD a multination semiconductor company with the european head quarters in Dublin. I got work on a bunch of projects while working there but my favourite project was helping to deliver a workshop at the HiPEAC hardware conference in Toulouse, France."
      approach="For this project I was in charge of creating a way to explain how AMD's AI engines preform matrix multiplications, an operation essential A.I. models. A lot of user testing was involved in this process and in the animations were the best way to get this process across.  It was a great way to explain something complex, sometimes words just get in the way!"
      learnings="Above you can see an example of the end animations looked like for basic matrix multiplication and an interview I did for the HiPEAC organisers. For this whole experience I really gained appreciation for how important communication is in design. This project inspired me to become a teaching assistant at Trinity College to understand what information needs to be shared to obtain understanding of technical ideas."
  
      layout="image-video" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/matrixMult-gif.gif', alt: 'Project Image' },
        { type: 'video', src: 'https://www.youtube.com/watch?v=QKZz4HdOn7E&t=2s' }
      ]}
  
      homePath="/"
      prevProjectPath="/project3"
      nextProjectPath="/project5"
    />
  );
}

export default Project3;
