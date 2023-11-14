/* eslint-disable react/prop-types */
import '../styles/main.scss'
import seaLogo from '/images/SEA-logo.png'
function Banner({datas}){
    return(
        <div className="banner-section" >
            <img src={seaLogo} alt="Logo SEA Web-Studio" />
            <div className="content">
                <h1>{datas.basic_info.title}</h1>
                <button className='btn CTA'>{datas.basic_info.cta}</button>
            </div>
        </div>
    )
}

export default Banner