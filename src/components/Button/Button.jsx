import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({
  totalHits,
  currentPage,
  perPage,
  loading,
  handleLoadMore,
}) {
  if (currentPage * perPage < totalHits && loading === false) {
    return (
      <div className="button-block">
        <button onClick={handleLoadMore} className="button-load" type="button">
          Load more
        </button>
      </div>
    );
  } else {
    return <></>;
  }
}

Button.propTypes = {
  currentPage: PropTypes.number,
  perPage: PropTypes.number,
  totalHits: PropTypes.number,
  loading: PropTypes.bool,
  handleLoadMore: PropTypes.func,
};
