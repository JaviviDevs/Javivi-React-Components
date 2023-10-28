import './portfolio-intro.css'


export function PortfolioIntro({img,subtitle,title,msgButton,linkButton}) {

  return (
    <article className='intro'>
      <section className='intro-information'>
        <h3 className='intro-information-h3'>{subtitle}</h3>
        <h1 className='intro-information-h1'>{title}</h1>
        <a className='intro-information-button' href={linkButton}>{msgButton}</a>
      </section>
      <img src={`./img/${img}`} className='intro-img'/>
    </article> 
  )
}