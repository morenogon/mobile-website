import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// helpers
import { fetchProductsList } from './helpers/fetchProductsList';

// context
import { ProductsListContext } from './hooks/context';

// styles
import './App.scss';

// components
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import NotFoundPage from './components/NotFoundPage';

const App = () => {

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      callProductsListApi();
    }, 3600 * 1000);

    callProductsListApi();
  }, []);

  const callProductsListApi = () => {
    fetchProductsList().then(res => {
      setProductsList(res.data);
      console.log(res.data)
    });
  }

  return (
    <div className="app">
      <ProductsListContext.Provider value={[productsList]}>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ProductsListContext.Provider>
    </div>
  );
}

export default App;
