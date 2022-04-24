import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
        type='text'
        name='name'
        placeholder='Mate Keg Name'
        required />
        <input
        type='text'
        name='brand'
        placeholder='Keg Brand' 
        required />
        <input
        type='text'
        name='flavor'
        placeholder='Keg Flavor'
        required />
        <input
        type='number'
        name='price'
        placeholder='Keg Price' 
        min='0'
        max='1000'
        required />
        <input
        type='text'
        name='caffeineContent'
        placeholder='Caffeine Content' 
        required />
        <hr />
        <button type='submit'>{props.buttonText}</button>
        <hr />
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;