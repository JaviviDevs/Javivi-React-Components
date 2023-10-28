import React from 'react';
import { NavBar } from './navBar/navBar.jsx';
import './App.css'


export function App() {

  const listLinks=[
                    ['characterDesign','Character Design'],
                    ['concepArt','Concept Art']
                  ];

  return (
    <NavBar links={listLinks} />
  )
}