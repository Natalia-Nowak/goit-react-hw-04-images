import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  alt,
  handleClick,
}) {
  return (
    <li key={id.toString()} className="gallery-item">
      <img
        onClick={() => handleClick(largeImageURL)}
        className="img"
        width="400px"
        height="250px"
        src={webformatURL}
        alt={alt}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  handleClick: PropTypes.func,
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
};
