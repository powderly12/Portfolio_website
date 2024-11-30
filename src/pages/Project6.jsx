import ProjectTemplate from './ProjectTemplate';

function Project6() {
  return (
    <ProjectTemplate 
      title="Roots - The Sustainable Wayfinding App"
      description="
I am currently working as part of a team to build a sustainable wayfinding app called Roots. Our aim with this app is to make users conscious of the environmental impact of their transportation choices and to encourage better options for wayfinding, such as biking and public transportation.
"
      approach="For me, this project is a full-circle moment. When I designed the self-sorting bins for the National Science Fair, I wanted to make eco-friendly choices easier for people. However, at the time, I met my limits due to not having the technical skills to bring my ideas to life."
      learnings="Now, after my time studying engineering, I have those skills, and I am working to bring my ideas to fruition in a better way. This project involves full-stack development, so I am contributing to all aspects of the application. Currently, I am working on collecting real-time data, and next, I will focus on life cycle assessment calculations to determine the amount of carbon dioxide a journey produces and provide this information to our users."
      layout="single-image"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project6.png', alt: 'Wayfinding App Logo' },
      ]}
      homePath="/"
      prevProjectPath="/project5"
    />
  );
}

export default Project6;
