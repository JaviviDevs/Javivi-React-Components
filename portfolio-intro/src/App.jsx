import React from 'react';
import { PortfolioIntro } from './portfolio-intro/portfolio-intro.jsx'
import './App.css'


export function App() {
  const img='perfil.png';
  const subtitle='Soy Javier Expósito';
  const title='Software Developer';
  const msgB='Contacto';
  const linkB='#ContactMe';

  return (
    <PortfolioIntro img={img} subtitle={subtitle} title={title} msgButton={msgB} linkButton={linkB}/>
  )
}