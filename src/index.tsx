import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return('PAREI NOS 05:00 DO VIDEO CONFIGURANDO MIRAGE')
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);