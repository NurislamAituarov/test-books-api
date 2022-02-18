import { Component } from 'react';

interface IState {
  error: boolean;
}

class ErrorBoundary extends Component {
  state: IState = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <h2>Произошла ошибка. Перезагрузите страницу либо вернитесь назад</h2>;
    }
    return this.props.children;
  }
}
export { ErrorBoundary };
