import React, { useState, useEffect } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import Home from '../Home/Home';
import axios from '../../api/axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/products');
      setProducts(response.data);
    })();
  },[]);

  return (
    <div>
      <HeaderNav />
      <Home products={products}/>
    </div>
  );
};

export default App;
