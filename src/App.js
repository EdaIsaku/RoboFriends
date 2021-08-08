import "./App.css";
import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import Cards from "./Components/Cards/Cards";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundry from "./Components/ErrorBoundry/ErrorBoundry";

import { connect } from "react-redux";
import { setSearchField, requestRobots } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (ev) => dispatch(setSearchField(ev.target.value)),
    onrequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //   };
  // }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((users) => this.setState({ robots: users }));
    this.props.onrequestRobots();
  }

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((el) => {
      return el.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cards robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
