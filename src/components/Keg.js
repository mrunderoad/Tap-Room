import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  return (
    <React.Fragment>
      <div class="list" onClick = {() => props.whenKegClicked(props.id)}>
        <h2>{props.name} - {props.brand}</h2>
        <h3>🍺{props.pint} pints left🍺</h3>
        <p class="click">Click for details and to pour yourself a pint!</p>
      </div>
      <hr class="line"/>
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