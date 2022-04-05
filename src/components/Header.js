import React from 'react';
import PropTypes from 'prop-types';

function Header({ text, textColor, bgColor }) {
  const headerStyles = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  textColor: '#FFD124',
  bgColor: '#006778',
};

export default Header;
