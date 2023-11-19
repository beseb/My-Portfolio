/* eslint-disable react/prop-types */
import '../styles/main.scss';

function Card({ datas }) {
  return (
    <a className='card_container'>
      <h3 className='--title'>{datas.title}</h3>
      <div className='--images_container'>{datas.images[0]}</div>
      <p className='--starDate italic'>{datas.startDate}</p>
      <button href={datas.url} target='blank'>
        {datas.cta}
      </button>
    </a>
  );
}

export default Card;
