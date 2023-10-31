import React from 'react';
import { EducationSection } from './education-section/educationSection.jsx';
import './App.css'


export function App() {
  const titleEducationSection='Formación';
  const subtitleEducationSection='Especializado en el desarrollo de páginas web y aplicaciones'
  const FormationCards=[
    ['UGR','Ingeniero informático 09/2018-07/2023'],
    ['GranaSat','TFG, software developer 10/2022-07/2023']
  ];
  return (
    <>
      <EducationSection title={titleEducationSection} subtitle={subtitleEducationSection} FormationCards={FormationCards}/>
    </>
    
  )
}