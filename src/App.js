import React from 'react';
import Profile from './Profile/Profile';
import './App.css';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import {  HelmetProvider } from 'react-helmet-async';
const App = () => (
    <HelmetProvider>
    <div className="app">
        <LanguageSwitcher />
        <Profile />
        
    </div>
    </HelmetProvider>
);

export default App;
