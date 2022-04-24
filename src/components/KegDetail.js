import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  let disabled = false;
  let hidden = true;
  let kegMessage = null;
  let kegMessage2 = null;
  if (keg.pint === 0) {
    kegMessage = "This Keg has been 86'd!";
    disabled = true;
    hidden = false;
  } else if (keg.pint <= 15) {
    kegMessage2 = "Keg getting low. Time for a refill!"
    hidden = false;
  }

  return (
    <React.Fragment>
      <div class="detail">
      <h1 class="dt">Keg Details</h1>
      <h2 class="dt">Brand: {keg.brand}</h2>
      <h3 class="dt">Name: {keg.name}</h3>
      <h3 class="flav dt">Flavor: {keg.flavor}</h3>
      <h3 class="price dt">Price: ${keg.price}</h3>
      <h3 class="dt">Caffeine Content: {keg.caffeineContent}</h3>
      <h4 class="pint dt">Pints left: {keg.pint}</h4>
      <h3 class="message dt">{kegMessage}</h3>
      <h3 class="message2 dt">{kegMessage2}</h3>
      </div>
      <hr />
      <button onClick={ props.onClickingEdit }>Update Keg Details</button> { }
      <button onClick={() => onClickingDelete(keg.id) }>Delete Keg From List</button> { }
      <button onClick={ props.onClickingPint } disabled={disabled}>Have a Pint!</button> { }
      <button onClick={ props.onClickingRefill } hidden={hidden}>Refill Keg!</button> { }
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;