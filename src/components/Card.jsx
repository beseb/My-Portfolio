import '../styles/main.scss'

function Card({ title, startDate, description, url, images, techs, cta }) {
    return(
        <div className="card_container">
            <span className='--title'>{title}</span>
            <span className="--starDate">{startDate}</span>
            <div className="--images_container">{images}</div>
            <a href={url} target='blank'>{cta}</a>
            <span className="--description">{description}</span>
            <span className='--usedTechs'>{techs}</span>
        </div>
    )
 
}
  

export default Card