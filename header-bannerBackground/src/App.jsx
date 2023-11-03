import React from 'react';
import { Header } from './header-banner/header.jsx';
import './App.css'


export function App() {
  const title='OpenCV and Python application for automotive spotlight image processing';

  return (
    <Header title={title} />
  )
}