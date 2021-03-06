import React from "react";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
      formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg})
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    
    const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handlePintClick = () => {
    const keg = this.state.selectedKeg;
    const kegPint = {
      name: keg.name,
      brand: keg.brand,
      price: keg.price,
      caffeineContent: keg.caffeineContent,
      pint: keg.pint -= 1,
      id: keg.id
    }
    this.handleChangingSelectedKeg(kegPint.id)
  }

  handleRefillClick = () => {
    const keg = this.state.selectedKeg;
    const refill = {
      name: keg.name,
      brand: keg.brand,
      price: keg.price,
      caffeineContent: keg.caffeineContent,
      pint: keg.pint = 124,
      id: keg.id
    }
    this.handleChangingSelectedKeg(refill.id)
    
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText= null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />;
      buttonText = "Home";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} onClickingPint = {this.handlePintClick} onClickingRefill = {this.handleRefillClick} />;
      buttonText = "Home";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />;
      buttonText = "Home";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg} />;
      buttonText = "Add new Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
