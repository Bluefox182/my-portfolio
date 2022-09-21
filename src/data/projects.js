import CSS01 from "../assets/img/ImgProjects/project01.png";
import JS01 from "../assets/img/ImgProjects/project03.png";
import React01 from "../assets/img/ImgProjects/cupcakelanding.png";
import React02 from "../assets/img/ImgProjects/project06.png";
import React03 from "../assets/img/ImgProjects/weather.png";
import React04 from "../assets/img/ImgProjects/rickandmorty.png";
import Jowells from "../assets/img/ImgProjects/jowells.png";

const projects = [
  {
    id: 1,
    category: "ReactJS",
    image: Jowells,
    // link1: "https://github.com/Bluefox182/ultimate-rick-and-morty",
    link2: "https://jowells-barber-shop.vercel.app/",
    title: "Jowell's Barbershop",
    text: "A special project for a local barbershop to showcase their work, made with React.",
  },
  {
    id: 2,
    category: "JavaScript",
    image: React01,
    link1: "https://github.com/Bluefox182/cupcake-landing-page",
    link2: "https://cupcake-landing-page.netlify.app/",
    title: "Cupcake Landing Page",
    text: "A landing page for a cupcake shop, made with React.",
  },
  {
    id: 3,
    category: "ReactJS",
    image: React02,
    // link1: "",
    link2: "https://monteza-eventos.vercel.app/",
    title: "Monteza Eventos",
    text: "A special Project for a customer who wanted a website for his event company, made with React.",
  },
  {
    id: 4,
    category: "ReactJS",
    image: React03,
    link1: "https://github.com/Bluefox182/ultimate-weather-app",
    link2: "https://bluefox182-weather-app.vercel.app/",
    title: "The Ultimate Weather App",
    text: "A beautiful weather app built with ReactJS and OpenWeather API",
  },
  {
    id: 5,
    category: "ReactJS",
    image: React04,
    link1: "https://github.com/Bluefox182/ultimate-rick-and-morty",
    link2: "https://bluefox-rick-and-morty.vercel.app/",
    title: "Rick and Morty API",
    text: "Discover the characters of Rick and Morty with this app built with ReactJS and Rick and Morty API",
  },
  {
    id: 6,
    category: "CSS3",
    image: CSS01,
    link1: "https://github.com/Bluefox182/Google-Clone",
    link2: "https://bluefox182.github.io/Google-Clone/",
    title: "Google Clone",
    text: "My own version of Google's homepage made with HTML and pure CSS.",
  },
  {
    id: 2,
    category: "JavaScript",
    image: JS01,
    link1: "https://github.com/Bluefox182/JavaScript-Drum-Kit",
    link2: "https://bluefox182.github.io/JavaScript-Drum-Kit/",
    title: "Drum Kit",
    text: "Play the drums with your keyboard, this games was built with Js Vanilla.",
  },
];

export default projects;
