import { ErrorBoundary } from '../errpr-boundary/ErrorBoundary';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </div>
  );
}

export default App;
