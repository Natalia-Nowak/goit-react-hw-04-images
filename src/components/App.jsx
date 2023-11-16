import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';

export const App = () => {
  return (
    <div>
      <Searchbar
        searchQuery={searchQuery}
        handleSubmit={handleSubmit}
        changeQuery={changeQuery}
      />
      <ImageGallery hits={hits} handleClick={handleClick} />
      <Button
        totalHits={totalHits}
        currentPage={currentPage}
        perPage={perPage}
        loading={loading}
        handleLoadMore={handleLoadMore}
      />
      <Loader loading={loading} />
      <Modal
        showModal={showModal}
        urlModal={urlModal}
        handleModalClose={handleModalClose}
        onKeyPressed={onKeyPressed}
      />
    </div>
  );
};

export default App;
