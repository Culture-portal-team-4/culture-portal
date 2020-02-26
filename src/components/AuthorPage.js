import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import AuthorInformation from './author-information/AuthorInformation'
import {useParams} from "react-router-dom";
import ScrollableTabs from './elements/ScrollableTabs/ScrollableTabs'
import AuthorsTimeline from "./timeline/AuthorsTimeline"
import ArtistSWorks from "./artist's-works/ArtistSWorks"
import Video from "./video/Video"
import YandexMap from './YandexMap/YandexMap'

const TITLES = ['biography', 'works', 'video', 'places']

const Author = ({ photographers }) => {
  const {id} = useParams()
  const author = photographers[id]
  const {biography, masterpiece, video, locationsCoords } = author

  return (
      <Fragment>
        <AuthorInformation author={ author }/>

        <ScrollableTabs
            titles={TITLES}
            componentsList={[
              <AuthorsTimeline timeLineItems={ biography } />,
              <ArtistSWorks masterpiece={ masterpiece } />,
              <Video youTubeVideoUrl={video} id={id} />,
              <YandexMap locationsCoords={locationsCoords} />
              ]
            }
        />
      </Fragment>
  );
};

export default Author;

Author.propTypes = {
  photographers: PropTypes.array.isRequired,
}
