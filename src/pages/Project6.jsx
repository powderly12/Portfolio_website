import ProjectTemplate from './ProjectTemplate';

function Project6() {
  return (
    <ProjectTemplate 
      title="Roots - The Sustainable Wayfinding App"
      introduction="I am currently collaborating with a team of eight to build a sustainable wayfinding app called Roots."
      description=" Our goal is to make users more conscious of the environmental impact of their transportation choices and to encourage eco-friendly alternatives, such as biking and public transportation. This project has been an exciting challenge in full-stack app development, requiring teamwork and integration across multiple disciplines."
      approach="For me, this project feels like a full-circle moment. When I designed the self-sorting bins for the National Science Fair, my goal was to make eco-friendly choices easier for people. At the time, I lacked the technical skills to bring my ideas fully to life. Now, with my engineering background and a collaborative team, I can approach these challenges with a deeper skill set and a shared vision. Our team divides responsibilities effectively: while I focus on collecting real-time transportation data, other team members are working on UI/UX design, backend infrastructure, and route optimization algorithms. Regular communication ensures that all components integrate seamlessly."
      learnings="This project has been an incredible opportunity to apply and expand my technical skills while working in a dynamic team environment. I got to design the logo (which is still being developed). Contributing to all aspects of the application has given me a holistic view of full-stack development. Currently, I am focusing on real-time data collection, and next, I will develop life cycle assessment calculations to estimate the carbon dioxide emissions for different transportation options. By providing users with this information, we hope to empower them to make sustainable travel choices. Working with my team has underscored the importance of collaboration in solving complex problems and has shown me how much more we can achieve together."
      layout="single-image"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project6_icon_image.png', alt: 'Roots Wayfinding App Logo' },
      ]}
      homePath="/"
      prevProjectPath="/project5"
    />
  );
}

export default Project6;
