import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';

export const App = () => {
  const [hits, setHits] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urlModal, setUrlModal] = useState('');

  const apiKey = '31724957-a5b65aed33845330804f8a3d2';

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      );
      setHits(response.data.hits);
      setTotalHits(response.data.totalHits);
    };
    fetchData();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    setLoading(true);

    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );

    setHits(response.data.hits);
    setTotalHits(response.data.totalHits);
    setCurrentPage(1);
    setLoading(false);
  };

  const changeQuery = event => {
    setSearchQuery(event.target.value);
  };

  const handleLoadMore = async event => {
    const incrementPage = currentPage + 1;

    setLoading(true);

    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${incrementPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );

    setHits([...hits, ...response.data.hits]);
    setTotalHits(response.data.totalHits);
    setCurrentPage(incrementPage);
    setLoading(false);
  };

  const handleClick = url => {
    setUrlModal(url);
    setShowModal(true);
  };

  const handleModalClose = event => {
    setShowModal(false);
  };

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
      />
    </div>
  );
};

export default App;
