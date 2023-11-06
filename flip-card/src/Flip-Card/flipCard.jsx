
import './flipCard.css'

export function FlipCard({link,img,textFunction}) {

    return (
        <a href={link} className="flip-card">
            <section className='flip-card-inner'>
                <section className='flip-card-front'>
                    <img src={`./img/${img}`} className='flip-card-img'/>
                </section>
                <section className='flip-card-back'>
                    <p className='flip-card-back-p'>{textFunction}</p>
                </section>
                
            </section>
        </a>
    )
}


