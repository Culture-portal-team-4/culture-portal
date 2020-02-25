import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import AuthorInformation from './author-information/AuthorInformation'
import {useParams} from "react-router-dom";
import ScrollableTabs from './elements/ScrollableTabs/ScrollableTabs'
import AuthorsTimeline from "./timeline/AuthorsTimeline"
import ArtistSWorks from "./artist's-works/ArtistSWorks"

const TITLES = ['biography', 'works']

const Author = ({ photographers }) => {
  const {id} = useParams()
  const author = photographers[id]
  const {biography, masterpiece } = author

  return (
      <Fragment>
        <AuthorInformation author={ author }/>

        <ScrollableTabs
            titles={TITLES}
            componentsList={[
              <AuthorsTimeline timeLineItems={ biography }/>,
              <ArtistSWorks masterpiece={ masterpiece }/>
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
