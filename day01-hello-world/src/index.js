import React from 'react';
import ReactDOM from 'react-dom/client';
import { Window } from './components/Window';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <title>Day 01</title>
    <Window />
  </React.StrictMode>
);

