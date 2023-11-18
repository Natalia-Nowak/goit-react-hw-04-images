import React from 'react';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import './Loader.css';

export default function Loader({ loading }) {
  if (loading === true) {
    return (
      <div className="spinner-block">
        <TailSpin
          height="80"
          width="80"
          color="#6687cf"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } else {
    return <></>;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
};
