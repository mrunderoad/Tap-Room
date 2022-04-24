import React from "react";
import PropTypes from "prop-types";

function Keg(props){
let message = null;
if (props.pint === 0){
  message = "OUT OF STOCK"
} else if (props.pint <= 15) {
  message = "KEG RUNNING LOW"
}
  return (
    <React.Fragment>
      <div class="list" onClick = {() => props.whenKegClicked(props.id)}>
        <h2>{props.name} - {props.brand}</h2>
        <h3>🍺{props.pint} pints left🍺</h3>
        <h3 class="out">{message}</h3>
        <p class="click">Click for details and to pour yourself a pint!</p>
      </div>
      <hr class="line"/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  caffeineContent: PropTypes.string,
  pint: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;