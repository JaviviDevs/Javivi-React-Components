import React from 'react';
import { LeftCircleCard } from '../left-circle-card/leftCircleCard';
import './educationSection.css'


export function EducationSection({title,subtitle,FormationCards}) {
  
  return (
    <article className='education'>
        <span className='orangeborder'></span>
        <h3 className='education-h3'>{title}</h3>
        <section className='education-row-flexbox'>
          <h4 className='education-h4'>{subtitle}</h4>
          <section className='education-colum-flexbox'>
            {FormationCards.map((card, indx) => (
                    <LeftCircleCard key={indx} company={card[0]} work={card[1]}/>
            ))}
          </section>
        </section>
        
    </article>
    
  )
}