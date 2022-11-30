import React from 'react';
import style from './style.less'
import { Routes, Route } from 'react-router-dom'
import { rootStore } from '../../../stores/rootstore.js';
import { Provider } from 'mobx-react';
import Router from '../../../routers';

export default function App() {
    return (
        <Provider {...rootStore}>
        
          <Router />
        
      </Provider>    
    );
  }