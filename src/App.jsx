import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import './App.scss';

// components
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
