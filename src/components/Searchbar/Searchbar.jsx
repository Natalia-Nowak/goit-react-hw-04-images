import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

export default function Searchbar({ searchQuery, handleSubmit, changeQuery }) {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          value={searchQuery}
          onChange={changeQuery}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
  searchQuery: PropTypes.string,
  changeQuery: PropTypes.func,
};
