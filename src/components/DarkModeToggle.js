
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from './DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='dark-mode-toggle' onClick={toggleDarkMode}>
      <FontAwesomeIcon icon={faMoon} />
      <span className="thin-text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
  );
};

export default DarkModeToggle;
