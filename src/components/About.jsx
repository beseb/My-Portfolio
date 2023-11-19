/* eslint-disable react/prop-types */
import '../styles/main.scss';
import myPhoto from '/images/my-photo.png';
function About({ datas }) {
  return (
    <section className='about-section' id='about'>
      <div className='about-section_title'>
        <h2 className='section-title'>{datas.basic_info.section_name.about}</h2>
      </div>
      <div className='about-section_picture '>
        <div className='circle'>
          <img
            src={myPhoto}
            alt='Photo of S.Escudero from SEA Web-Studio'
          ></img>
        </div>
      </div>
      <div className='about-section_content'>
        <h3>{datas.basic_info.description_header}</h3>
        <h4>{datas.basic_info.description_1}</h4>
        <h4>{datas.basic_info.description_2}</h4>
        <h4>{datas.basic_info.description_3}</h4>
        <h4>{datas.basic_info.description_4}</h4>
      </div>
    </section>
  );
}

export default About;
