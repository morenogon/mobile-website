import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// helpers
import { fetchProductsList } from './helpers/fetchProductsList';

// context
import { ProductsInCartContext, ProductsListContext } from './hooks/context';

// styles
import './App.scss';

// components
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import NotFoundPage from './components/NotFoundPage';
import ProductDetail from './components/ProductDetail';

const App = () => {

  const [productsList, setProductsList] = useState([]);
  const [productsInCart, setProductsInCart] = useState(0);
  const [initTimer, setInitTimer] = useState(0);

  useEffect(() => {
    callProductsListApi();
  }, []);

  // call api every hour
  useEffect(() => {
    setTimeout(() => {
      setInitTimer(!initTimer);

      callProductsListApi();
    }, 3600 * 1000);
  }, [initTimer]);

  const callProductsListApi = () => {
    fetchProductsList().then(res => {
      setProductsList(res.data);
    });
  }

  return (
    <div className="app">
      <ProductsListContext.Provider value={[productsList]}>
        <ProductsInCartContext.Provider value={[productsInCart, setProductsInCart]}>
          <Header />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ProductsInCartContext.Provider>
      </ProductsListContext.Provider>
    </div>
  );
}

export default App;
