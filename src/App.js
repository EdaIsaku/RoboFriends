import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import Cards from "./Components/Cards/Cards";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundry from "./Components/ErrorBoundry/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchBox: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => this.setState({ robots: users }));
  }

  onSearchBoxChange = (ev) => {
    this.setState({
      searchBox: ev.target.value,
    });
  };

  render() {
    const { robots, searchBox } = this.state;
    const filteredRobots = robots.filter((el) => {
      return el.name.toLowerCase().includes(searchBox.toLowerCase());
    });

    return robots.length === 0 ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchBoxChange} />
        <Scroll>
          <ErrorBoundry>
            <Cards robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
