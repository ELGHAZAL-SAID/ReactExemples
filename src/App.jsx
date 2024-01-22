import './App.css';
import React, { useState, lazy, Suspense  } from 'react';
import FormMemo from './comps/form';
import ErrorBoundary from './comps/ErrorBoundary'
import WeatherApp from './comps/TryAPI'



const Products = lazy(() => import('./comps/Products'));



const App = () => {

    const [showProducts, setShowProducts] = useState(false);
  
    const handleShowProducts = () => {
      setShowProducts(true);
    };
  

  return (
      <>
      {/*The Memo and the use memo also the ErrorBoundary Exemple*/}
    <ErrorBoundary>
      <div>
        <h1>My App</h1>
        <FormMemo />
      </div>
    </ErrorBoundary>

      {/* Using the lazy and the suspense Exemple */}

    <div>
      <ErrorBoundary>
        <h1>My Products</h1>
        <button onClick={handleShowProducts}>Get Products</button>
        {showProducts && (
          <Suspense fallback={<div>Loading Products...</div>}>
            <Products />
          </Suspense>
        )}
      </ErrorBoundary>
    </div>
    {/*weather API*/}
    <div>
        <WeatherApp/>
    </div>

    </>
  );
};

export default App;
