// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/products" exact component={AllProducts} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default App;
