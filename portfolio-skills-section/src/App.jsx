import React from 'react';
import { SkillsSection } from './skills-section/skillsSection';
import './App.css'


export function App() {
  
  const skills=['python.png','c++.png','java.png','openCV.png','Qt.png','php.png','html.png','css.png','javaScript.png','react.png','git.png','github.png'];
  const title='Skills y Lenguajes de Programación';
  return (
    <>
      <SkillsSection skills={skills} title={title}/>
    </>
    
  )
}