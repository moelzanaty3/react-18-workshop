import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service like  Sentry and TrackJS.
    // logErrorToMyService(error, errorInfo);
    // Catch errors in any components below and re-render with error message
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log(this.state);
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
