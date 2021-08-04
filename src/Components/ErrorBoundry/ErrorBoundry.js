import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      hasErrors: true,
    });
  }

  render() {
    const { hasErrors } = this.state;
    if (hasErrors) {
      return <h1>Something went wrong. Please wait a second...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
