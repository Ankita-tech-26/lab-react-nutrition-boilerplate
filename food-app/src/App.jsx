import { Component } from "react";
import "./App.css";
import FoodData from "./resources/FoodData";
import FoodBox from "./components/FoodBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredData: [...FoodData],
    };
  }

  handleChange = (event) => {
    let searchText = event.target.value.toLowerCase();

    let searchResults = FoodData.filter((element) => {
      return element.name.toLowerCase().includes(searchText);
    });

    this.setState({
      filteredData: searchResults,
    });
  };

  render() {
    return (
      <>
        <div className="header">
          <h1>Food Website</h1>
          <input
            className="search-input"
            type="text"
            placeholder="Search Here"
            onChange={this.handleChange}
          />
        </div>
        <div className="food-container">
          {this.state.filteredData.map((element, i) => (
            <FoodBox foodItem={element} key={i} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
