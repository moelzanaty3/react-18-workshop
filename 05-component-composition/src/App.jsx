import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchParams from './components/SearchParams';

// App Component
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
// Get Root Element
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(<App />);
