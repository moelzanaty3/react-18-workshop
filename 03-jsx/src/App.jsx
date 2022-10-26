import React from 'react';
import ReactDOM from 'react-dom/client';
import Pet from './components/Pet';

// App Component
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};
// Get Root Element
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(<App />);
