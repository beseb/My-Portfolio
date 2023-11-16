import '../styles/main.scss'

function Card({ title, startDate, description, url, images, techs, cta }) {
    return(
        <div className="card_container">
            <h3 className='--title'>{title}</h3>
            <p className="--starDate italic">{startDate}</p>
            <div className="--images_container">{images}</div>
            <a href={url} target='blank'>{cta}</a>
            <p className="--description">{description}</p>
            <p className='--usedTechs'>{techs}</p>
        </div>
    )
 
}
  

export default Card