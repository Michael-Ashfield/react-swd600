import React from "react";
import PropTypes from "prop-types";

function Tile(props) {
  const { children } = props;
  let { elevation } = props;
  if (elevation > 5) {
    elevation = 5;
  }
  if (elevation < 0) {
    elevation = 0;
  }
  const divStyle = {
    boxShadow: `0px 10px 20px rgba(31, 32, 65, 0.${elevation})`
  };

  return <div style={divStyle}>{children}</div>;
}
Tile.defaultProps = {
  elevation: 0
};
Tile.PropTypes = {
  elevation: PropTypes.number
};

export default Tile;
