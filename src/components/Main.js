import React from 'react';
import PropTypes from 'prop-types';
import MainPage from "./main-page/MainPage";

const Main = (props) => {
  return (
      <MainPage />

  );
}

Main.propTypes = {
  name: PropTypes.string
};

export default Main;
