import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h2>{props.name} from {props.brand}</h2>
        <p>Click for details!</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  caffeineContent: PropTypes.string,
  pint: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;