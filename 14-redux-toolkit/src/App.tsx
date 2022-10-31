import { useState, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import AdoptedPetContext from './contexts/AdoptedPetContext';
import Loader from './components/Loader';
import { Pet } from './types/common';
import { store } from './app/store';

// https://bundlephobia.com/package/react@18.2.0
// https://bundlephobia.com/package/react-dom@18.2.0

const Details = lazy(() => import('./pages/Details'));
const SearchParams = lazy(() => import('./pages/SearchParams'));

const NotFound = () => <h1>Page Not Found</h1>;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// App Component
const App = () => {
  const adoptedPet = useState<Pet | null>(null);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            {/* Show a spinner while app code is read more -> loading https://stackoverflow.com/a/63655226/6483379 */}
            <Suspense
              fallback={
                <div className="loader-container">
                  <Loader />
                </div>
              }
            >
              <header>
                <Link to="/">Adopt Me!</Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};
// Get Root Element
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container as HTMLDivElement);
// Initial render
root.render(<App />);
