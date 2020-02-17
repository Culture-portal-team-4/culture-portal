import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <ul>Main page with
      <li>portal's description</li>
      <li>'author of the day' block </li>
      <li>developer team description (userpics + github accounts + nicknames/names), and contribution of each member </li>
    </ul>
  );
}

Main.propTypes = {
  name: PropTypes.string
};

export default Main;
