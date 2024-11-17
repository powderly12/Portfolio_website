import ProjectTemplate from './ProjectTemplate';

function Project6() {
  return (
    <ProjectTemplate 
      title="Roots - The Sustainable Wayfinding App"
      description="
I am currently working as part of a team to build a sustainable wayfinding app called roots. Our app with this app is to make users conscience of the environmental impact of their transportation choices and to encourage better choices for way finding such as bike and bus.
"
      approach="
      For me this project is a full circle moment. When I design the self-sorting bins for the National Science fair, I wanted to make eco friendly choice be easier for people, but I met my limits at the time due to not having the technical skills to make my ideas a Reality. 
Now after my time studying engineering, I have those skills, and I am working to bring my ideas out in a better way. This project is a full stack development, so I am working on all aspects of our application. In particular I at the moment I am working on collecting real-time data and next I will be working on life cycle assessment calculations to determine the amount of Carbon Dioxide a journey will produce and inform our users.

      "
      
      layout="single-image" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/project6.png', alt: 'Wayfinding app Logo' },
      ]}
      homePath="/"
      prevProjectPath="/project5"
    />
  );
}

export default Project6;
