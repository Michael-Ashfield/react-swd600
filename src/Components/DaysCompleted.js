// src/Components/DaysCompleted.js

import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram.js";

function DaysCompleted(props) {
  const h1Style = { textAlign: "center", color: "#BC9CFE" };
  const { days, checking } = props;

  return (
    <Tile elevation={5}>
      <h1 style={h1Style}> {days} Days Completed</h1>
      <Histogram bars={checking} />
    </Tile>
  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number.isRequired
};

DaysCompleted.defaultProps = {
  days: 0
};

export default DaysCompleted;
