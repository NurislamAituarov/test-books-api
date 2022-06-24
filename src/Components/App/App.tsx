import { ErrorBoundary } from '../ErrprBoundary/ErrorBoundary';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
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
