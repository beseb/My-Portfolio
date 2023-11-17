import '../styles/main.scss'

function Card({ title, startDate, description, url, images, techs, cta }) {
    return(
        <a className="card_container">
            <h3 className='--title'>{title}</h3>
            <div className="--images_container">{images[0]}</div>
            <p className="--starDate italic">{startDate}</p>
            <button href={url} target='blank'>{cta}</button>

        </a>
    )
 
}
  

export default Card