import React from 'react';
import Profile from './Profile/Profile';
import './App.css';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

const App = () => (
    <div className="app">
        <LanguageSwitcher />
        <Profile />
    </div>
);

export default App;
