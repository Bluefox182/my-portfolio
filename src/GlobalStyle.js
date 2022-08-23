import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --primary-color: #4d74e6;
    // --primary-color-light: ##4d74e6;
    --primary-color-light: #3330E4;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #F9F9F9;
    --white-color-2: #FFFFFF;
    --font-light-color: #F9F9F9;
    --font-light-color-2: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --icon-dark-color: #202020;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
} 
.light-theme{
    --primary-color: #4d74e6;
    --primary-color-light: #3330E4;
    --secondary-color: #6c757d;
    --background-dark-color: #FFFFFF;
    --background-dark-grey: #F9F9F9;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #423F3E;
    --white-color-2: #FFFFFF;
    --font-light-color: #313131;
    --font-light-color-2: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --icon-dark-color: #E1E5EA;
    --sidebar-dark-color: #FFFFFF;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #4d74e6;
    // --primary-color-light: #057FFF;
    // --primary-color-light: #0000ff;
    --primary-color-light: #3330E4;
    --secondary-color: #6c757d;
    --background-dark-color: #111316;
    --background-dark-grey: #0F0E0E;
    --border-color: #4d74e6;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --white-color-2: #FFFFFF;
    --font-light-color: #FFFFFF;
    --font-light-color-2: #6c757d;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --icon-dark-color: #202020;
    --sidebar-dark-color: #111316;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1rem;
    overflow-x: hidden;
    
}

body{
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all 0.4s ease-in-out;
    
}


/* Floating Toggler  Light-Dark Mode*/
.light-dark-mode{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0;
    top: 10px;
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
}


`;

export default GlobalStyle;
