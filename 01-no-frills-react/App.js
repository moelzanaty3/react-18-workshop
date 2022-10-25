// Pet Component
const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Luna'),
    React.createElement('h2', {}, 'Dog'),
    React.createElement('h2', {}, 'Havanese'),
  ]);
};
// App Component
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};
// Get Root Element
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(React.createElement(App));
