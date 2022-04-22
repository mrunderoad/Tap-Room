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
        type='text'
        name='price'
        placeholder='Keg Price' 
        required />
        <input
        type='text'
        name='caffeineContent'
        placeholder='Caffeine Content' 
        required />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;