import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Iframe = () => {
  return (
    <div>
      <iframe
        style={{
          width: "100%",
          height: "50%",
        }}
        frameBorder="0"
        src="https://momento360.com/e/u/f4ca0d7e91f646f08b7d1c27ace31c26?utm_campaign=embed&utm_source=other&heading=27.6&pitch=37.2&field-of-view=75&size=medium"
        title="gymFrame"
      ></iframe>
    </div>
  );
};

Iframe.propTypes = propTypes;
Iframe.defaultProps = defaultProps;
// #endregion

export default Iframe;
