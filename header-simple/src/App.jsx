import React from 'react';
import { Header } from './header-simple/header.jsx';
import './App.css'


export function App() {
  const name='JAVIVIDEVS';

  return (
    <Header name={name} />
  )
}