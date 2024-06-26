import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import './scss/app.scss';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

// Решение ленивой загрузки путем React Loadable
const Cart = Loadable({
  loader: () => import(/*webpackChunkName: "Cart"*/ './pages/Cart'),
  loading: () => <div>Идет загрузка корзины...</div>,
});

const FullPizza = Loadable({
  loader: () => import(/*webpackChunkName: "FullPizza"*/ './pages/FullPizza'),
  loading: () => <div>Идет загрузка...</div>,
});

// Решение ленивой загрузки путем React.lazy
const NotFound = React.lazy(() => import(/*webpackChunkName: "NotFound"*/ './pages/NotFound'));

// const NotFound = Loadable({
//   loader: () => import(/*webpackChunkName: "NotFound"*/ './pages/NotFound'),
//   loading: () => <div>Идет загрузка...</div>,
// });

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pizza/:pizzaId' element={<FullPizza />} />
        <Route
          path='*'
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
