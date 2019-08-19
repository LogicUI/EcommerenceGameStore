import React, { useEffect } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/products/productActions';
import Home from '../Home/Home';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(fetchProducts());
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <HeaderNav />
      <Home />
    </div>
  );
};

export default App;
