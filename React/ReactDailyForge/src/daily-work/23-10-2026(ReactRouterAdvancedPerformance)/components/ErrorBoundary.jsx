
import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section role="alert">
          <h2>Something went wrong.</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}
