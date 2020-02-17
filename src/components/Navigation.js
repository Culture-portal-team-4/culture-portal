import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav>
      <ul className="nav">
        <li key='home'><NavLink exact to='/'>Home</NavLink></li>
        <li key='authors'><NavLink to='/authors'>Authors</NavLink></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  name: PropTypes.string
};

export default Navigation;
