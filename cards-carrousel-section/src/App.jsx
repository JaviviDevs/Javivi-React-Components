import React from 'react';
import { SectionCardCarrousel } from './Section-Card-Carrousel/sectionCardCarrousel.jsx';
import './App.css'


export function App() {
  const titleProjectSection='Proyectos';
  const projectCards=[
    [['TFG'],['BlackTheme.png'],['OpenCV and Python application for automotive spotlight image processing'],['python.png','openCV.png','qt.png','arduino.png']],
    [['cARds'],['cARds.png'],['cARds'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds2'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds3'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds4'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds5'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds6'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds7'],['python.png','openCV.png']]
    
   
  ];

  return (
    <>
      <SectionCardCarrousel title={titleProjectSection} projectCards={projectCards}/>
    </>
    
  )
}