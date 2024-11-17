import ProjectTemplate from './ProjectTemplate';

function Project5() {
  return (
    <ProjectTemplate 
      title="Drone Light Painter"
      approach="This project was pure fun! I had never worked with drones before, there are some bugs still to be worked out and the image needs to made smoother.  For this project I used a crazyflie drone to build a system that could aid in light exposer photography. I used python to make a graph user interface that allowed the user to draw a path in 3 different colours. Then the drone would trace out the lines the user drew, changing the color of the LEDs accordingly."
      introduction="I have a passion for photography, and an interesting type of photography I wanted to get into was light painting. This is where you take an exposer shot and move lights around to draw out an image."
      description="In this project used a drone to aid in this task.  Below you can see the current working prototype for a passion project I am currently working on of the GUI and the path the drone traced out."
      learnings="This project brought together my love of photography and engineering which showed how much I have improved my technical skills since the start of my design journey."
      layout="two-images" // Choose appropriate layout
      mediaContent={[
        { type: 'image', src: '/Portfolio_website/assets/test1.png', alt: 'Project Image 1' },
        { type: 'image', src: '/Portfolio_website/assets/test2.jpg', alt: 'Project Image 2' }
      ]}
      homePath="/"
      prevProjectPath="/project4"
      nextProjectPath="/project6"
    />
  );
}

export default Project5;
