import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = ({
  car,
  additionalFeatures,
  additionalPrice,
  addFeature,
  removeFeature
}) => {
  const removeItem = item => {
    // dispatch an action here to remove an item
    removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures
          addFeature={buyItem}
          additionalFeatures={additionalFeatures}
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
