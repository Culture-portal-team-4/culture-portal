import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const Header = ( {select} ) => {
  return (
    <header>
      <p> {select} </p>
      <Navigation />
    </header>
  )
};

Header.propTypes = {
  select: PropTypes.string
};

export default Header;
