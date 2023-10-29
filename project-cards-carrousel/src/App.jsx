import React from 'react';
import {ProjectCardsCarrousel} from './Project-Card-Carrousel/projectCardCarrousel.jsx';
import './App.css'


export function App() {
  
  const projectCards=[
                      [['TFG'],['BlackTheme.png'],['OpenCV and Python application for automotive spotlight image processing'],['python.png','openCV.png','qt.png','arduino.png']],
                      [['cARds'],['cARds.png'],['cARds'],['python.png','openCV.png']],
                      [['TFG'],['BlackTheme.png'],['TFG2'],['python.png','openCV.png','qt.png','arduino.png']],
                      [['cARds'],['cARds.png'],['cARds2'],['python.png','openCV.png']],
                      [['TFG'],['BlackTheme.png'],['TFG3'],['python.png','openCV.png','qt.png','arduino.png']],
                      [['cARds'],['cARds.png'],['cARds3'],['python.png','openCV.png']]
                    ];
  
  return (
    < ProjectCardsCarrousel cards={projectCards}/>
  )
}