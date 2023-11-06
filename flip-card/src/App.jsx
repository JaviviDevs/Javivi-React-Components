import React from 'react';
import { FlipCard} from './Flip-Card/flipCard.jsx';
import './App.css'


export function App() {
  const link="TFG";
  const imgProject='Update.png';
  const textFunction='CHECK UPDATES'
  
  return (
    <FlipCard link={link} img={imgProject} textFunction={textFunction}/>
  )
}