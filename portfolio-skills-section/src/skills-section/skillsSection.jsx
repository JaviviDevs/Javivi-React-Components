import React from 'react';
import './skillsSection.css'


export function SkillsSection({title,skills}) {
  return (
    <article className='skills'>
      <h3 className='skills-h3'>{title}</h3>
      <section className='technologies'>
        {skills.map((skill, indx) => (
                  <img key={indx}  src={`./img/${skill}`} className='technologies-img'/>
          ))}  
      </section>
    </article>
    
  )
}