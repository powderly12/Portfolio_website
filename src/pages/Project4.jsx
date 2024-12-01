import ProjectTemplate from './ProjectTemplate';

function Project4() {
  return (
    <ProjectTemplate
      title="HiPEAC Workshop Animations"
      introduction="After my third year in college, I sought practical experience and joined AMD, a multinational semiconductor company with its European headquarters in Dublin."
      description="During my internship, I worked on several exciting projects, but my favorite was contributing to a workshop for the HiPEAC hardware conference in Toulouse, France. This project combined technical problem-solving with creative design, allowing me to explore how to communicate complex ideas effectively."
      approach="The core challenge of this project was explaining how AMD's AI engines perform matrix multiplications, a foundational operation in AI models. To tackle this, I led the design of animations that would simplify the concept for a diverse audience. The process involved extensive user testing to identify the most effective way to communicate the topic. Early iterations included diagrams and written explanations, but I found that animations provided the clarity and accessibility we needed. By visually representing complex processes, the animations removed potential barriers created by technical jargon and made the concept intuitive and engaging."
      learnings="This project deepened my understanding of how communication and design go hand in hand. Creating these animations required me to think critically about the user's perspective, ensuring that even complex ideas could be easily understood. Above, you can see examples of the animations I created for basic matrix multiplication, as well as an interview I did for the HiPEAC organizers. Inspired by this experience, I became a teaching assistant at Trinity College, where I honed my ability to present technical concepts in a clear and impactful way. This project reinforced my belief in the importance of thoughtful design for effective communication."
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
