import ProjectTemplate from './ProjectTemplate';

function Project5() {
  return (
    <ProjectTemplate 
      title="Drone Light Painter"
      approach="This project was pure fun! I had never worked with drones before. There are still some bugs to work out, and the images need to be smoother. For this project, I used a Crazyflie drone to build a system that could aid in light exposure photography. I used Python to create a graphical user interface (GUI) that allowed the user to draw a path in three different colors. The drone would then trace out the lines the user drew, changing the color of the LEDs accordingly."
      introduction="I have a passion for photography, and an interesting type of photography I wanted to explore was light painting. This involves taking a long exposure shot and moving lights around to draw an image."
      description="In this project, I used a drone to aid in this task. Below, you can see the current working prototype of the GUI and the path the drone traced out for this passion project I am currently developing."
      learnings="This project brought together my love of photography and engineering, showing how much I have improved my technical skills since the start of my design journey."
      layout="two-images"
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/test1.png', alt: 'GUI of Drone Light Painter' },
        { type: 'image', src: '/Portfolio_website/assets/test2.jpg', alt: 'Drone Light Painting Path' }
      ]}
      homePath="/"
      prevProjectPath="/project4"
      nextProjectPath="/project6"
    />
  );
}

export default Project5;
