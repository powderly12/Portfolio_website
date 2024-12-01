import ProjectTemplate from './ProjectTemplate';

function Project5() {
  return (
    <ProjectTemplate 
      title="Drone Light Painter"
      introduction="Photography has always been a passion of mine, and light painting—creating images by moving lights during long-exposure shots—offers a fascinating way to merge creativity and technology. I wanted to push this concept further by integrating drones into the process, combining engineering and photography in a unique way."
      description="For this project, I developed a system using a Crazyflie drone to assist with light exposure photography. The goal was to create a tool that could precisely trace paths in three different colors, bringing consistency and precision to the art of light painting. Below, you can see the current prototype of the graphical user interface (GUI) and an example of the path the drone traced."
      approach="The design process was both exciting and challenging, as this was my first time working with drones. I used Python to build the GUI, which allows users to draw a path for the drone to follow. The drone then traces the path, changing the color of its LEDs based on the user's input. Iterative testing and debugging were essential to improve the accuracy of the drone's movements and the smoothness of the images it creates. While there are still some bugs to resolve, the project has been an incredible opportunity to experiment and learn."
      learnings="This project brought together my love for photography and engineering, demonstrating how far I’ve come in my technical abilities since the start of my design journey. It also reinforced the importance of iterative design and experimentation in developing innovative tools. I’m excited to continue refining this system and exploring new creative possibilities at the intersection of technology and art."
      layout="two-images"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/test1.png', alt: 'Graphical User Interface for Drone Light Painter' },
        { type: 'image', src: '/Portfolio_website/assets/test2.jpg', alt: 'Light Painting Path Traced by Drone' }
      ]}
      homePath="/"
      prevProjectPath="/project4"
      nextProjectPath="/project6"
    />
  );
}

export default Project5;
