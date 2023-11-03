import React from 'react';
import { FooterSection } from './footer-section/footerSection.jsx';
import './App.css'


export function App() {

  const footerLinks=[
    ['mailto:javierexmar@gmail.com?subject=consulta','email.png','javierexmar@gmail.com'],
    ['https://github.com/JaviviDevs','github.png','JaviviDevs'],
    ['https://www.linkedin.com/in/javier-exp%C3%B3sito-mart%C3%ADnez/','linkedin.png','']
  ];

  return (
    <>
      <section className='flexbox-blue'>
        <section className='margin-flexbox'>
          <FooterSection links={footerLinks}/>
        </section>
      </section>
    </>
  )
}