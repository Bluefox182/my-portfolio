import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MySkills from './pages/MySkills';
import Work from './pages/Work';

import Sidebar from './components/Sidebar';
import SocialIcons from './components/SocialIcons';

import ToggleMenu from './components/ToggleMenu';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    } else {
      setTheme('light-theme');
      setChecked(true);
    }
  };

  return (
    <div className='App'>
      <Sidebar navToggle={navToggle} />
      <div className='theme'>
        <div className='light-dark-mode'>
          <div className='left-content'>
            <Brightness4Icon />
          </div>
          <div className='right-content'>
            <SocialIcons />
            <Switch
              value=''
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size='medium'
              onClick={toggleTheme}
            />
          </div>
        </div>
      </div>

      <ToggleMenu />

      <MainContentStyled>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<MySkills />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 200px;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export default App;
