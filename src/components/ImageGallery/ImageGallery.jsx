import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ hits, handleClick }) {
  return (
    <ul className="gallery">
      {hits.map(hit => (
        <ImageGalleryItem
          key={`ImageGalleryItem_${hit.id}`}
          id={hit.id}
          webformatURL={hit.webformatURL}
          largeImageURL={hit.largeImageURL}
          alt={hit.tags}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  hits: PropTypes.array,
  handleClick: PropTypes.func,
};
