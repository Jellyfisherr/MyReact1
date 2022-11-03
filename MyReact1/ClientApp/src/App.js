import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { FetchData } from './components/FetchData';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import ProductDetails from './components/ProductDetails';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/couter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/product/details' component={ProductDetails} />
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
