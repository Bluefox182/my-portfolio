import CSS01 from "../assets/img/ImgProjects/project01.png";
import JS01 from "../assets/img/ImgProjects/project03.png";
import React01 from "../assets/img/ImgProjects/cupcakelanding.png";
import React02 from "../assets/img/ImgProjects/project06.png";
import React03 from "../assets/img/ImgProjects/weather.png";
import React04 from "../assets/img/ImgProjects/rickandmorty.png";

const projects = [
  {
    id: 1,
    category: "CSS3",
    image: CSS01,
    link1: "https://github.com/Bluefox182/Google-Clone",
    link2: "https://bluefox182.github.io/Google-Clone/",
    title: "Google Clone",
    text: "HTML5 and CSS3.",
  },

  {
    id: 2,
    category: "JavaScript",
    image: JS01,
    link1: "https://github.com/Bluefox182/JavaScript-Drum-Kit",
    link2: "https://bluefox182.github.io/JavaScript-Drum-Kit/",
    title: "Drum Kit",
    text: "Built with JavaScript",
  },
  {
    id: 3,
    category: "JavaScript",
    image: React01,
    link1: "https://github.com/Bluefox182/cupcake-landing-page",
    link2: "https://cupcake-landing-page.netlify.app/",
    title: "Cupcake Landing Page",
    text: "Built with ReactJs",
  },

  {
    id: 4,
    category: "ReactJS",
    image: React02,
    link1: "https://github.com/Bluefox182/To-Do-List",
    link2: "https://bluefox182.github.io/To-Do-List/",
    title: "GitHub Profile",
    text: "Built with ReactJS and GitHub API",
  },
  {
    id: 5,
    category: "ReactJS",
    image: React03,
    link1: "https://github.com/Bluefox182/ultimate-weather-app",
    link2: "https://bluefox182-weather-app.vercel.app/",
    title: "The Ultimate Weather App",
    text: "React Weather App",
  },
  {
    id: 6,
    category: "ReactJS",
    image: React04,
    link1: "https://github.com/Bluefox182/ultimate-rick-and-morty",
    link2: "https://bluefox-rick-and-morty.vercel.app/",
    title: "Rick and Morty API",
    text: "Built with ReactJS ",
  },
];

export default projects;
