import React from 'react';
import { AboutMeSection } from './aboutMe-section/aboutMeSection';
import './App.css'


export function App() {
  const title='Sobre Mi';
  const text='Recientemente he finalizado la carrera de ingeniería informática y en este momento, me encuentro dedicando mi tiempo a aprender las tecnologías más recientes utilizadas en el desarrollo de aplicaciones y sitios web, centrándome en el ámbito del front-end.';
  const img='perfil.png'

  return (
    <>
      <AboutMeSection title={title} text={text} img={img}/>
    </>
    
  )
}