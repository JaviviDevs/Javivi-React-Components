import React from 'react';
import { ProjectCard} from './Project-Card/projectCard.jsx';
import './App.css'


export function App() {
  const link="TFG";
  const imgProject='BlackTheme.png';
  const title='OpenCV and Python application for automotive spotlight image processing';
  const technologies=['python.png','openCV.png','qt.png','arduino.png'];
  return (
    <ProjectCard link={link} imgProject={imgProject} title={title} technologies={technologies}/>
  )
}