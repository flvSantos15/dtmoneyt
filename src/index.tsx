import React from 'react';
import { createRoot } from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

// Add Vite env types
declare global {
  interface ImportMeta {
    env: {
      MODE: string;
    };
  }
}

// Start MirageJS server
if (import.meta.env.MODE === 'development') {
  createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'freelancer de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6800,
            createdAt: new Date('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'casa',
            amount: 1100,
            createdAt: new Date('2021-08-11 10:34:57'),
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750; // Delay for development

      this.get('/transactions', () => {
        return this.schema.all('transaction');
      });

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create('transaction', data);
      });
    },
  });
}

// Render the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}