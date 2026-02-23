import React,{ useEffect}  from 'react';
import Profile from './Profile/Profile';
import './App.css';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import {  HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga';


// Track page views
const App = () => {
    useEffect(() => {
        ReactGA.initialize('G-JKHD2P7CW3'); 
        ReactGA.send("pageview");
      }, []);
    
    return (<HelmetProvider>
    <div className="app">
        <DarkModeToggle />
        {/* <LanguageSwitcher /> */}
        <Profile />
        
    </div>
    </HelmetProvider>
)};

export default App;
