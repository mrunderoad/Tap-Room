import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Brand: {keg.brand}</h3>
      <h3>Name: {keg.name}</h3>
      <h3>Price: {keg.price}</h3>
      <h3>Caffeine Content: {keg.caffeineContent}</h3>
      <hr />
      <button onClick={ props.onClickingEdit }>Update Keg Details</button> { }
      <button onClick={() => onClickingDelete(keg.id) }>Delete Keg From List</button>
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