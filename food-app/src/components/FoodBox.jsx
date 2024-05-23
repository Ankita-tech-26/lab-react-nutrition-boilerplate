import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FoodBox.css"; // Import CSS file for component styling

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      calCount: 0,
    };
  }

  handleInput = (event) => {
    this.setState({
      clickCount: event.target.value,
    });
  };

  handleButton = () => {
    const { foodItem } = this.props;
    this.setState({
      calCount: this.state.clickCount * foodItem.cal,
    });
  };

  render() {
    const { foodItem } = this.props;
    
    return (
      <div className="food-box">
        <article>
          <div className="food-image">
            <img src={foodItem.img} alt={foodItem.name} />
          </div>
          <div className="food-details">
            <p>
              <strong>{foodItem.name}</strong><br/>
              <small>{foodItem.cal} calories</small>
            </p>
            <div className="quantity-section">
              <input
                type="number"
                onChange={this.handleInput}
                className="quantity-input"
              />
              <button
                onClick={this.handleButton}
                className="add-button"
              >
                +
              </button>
              <div>
                <p>Quantity: {this.state.clickCount}</p>
                <p>Total Calories: {this.state.calCount}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

FoodBox.propTypes = {
  foodItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

FoodBox.defaultProps = {
  foodItem: {
    name: "Food Item",
    cal: 500,
    img: "https://via.placeholder.com/150",
  },
};
