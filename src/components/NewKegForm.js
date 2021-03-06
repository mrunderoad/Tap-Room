import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value, caffeineContent: event.target.caffeineContent.value, pint: 124, id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleNewKegFormSubmission}
      buttonText = "Tap that keg!" />
    </React.Fragment>
  );
}  

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
