/* eslint-disable react/prop-types */
import Typical from 'react-typical'
import '../styles/main.scss'
import seaLogo from '/images/SEA-logo.png'
function Banner({datas}){
    return(
        <div className="banner-section" >
            <img src={seaLogo} alt="Logo SEA Web-Studio" />
            <div className="content">
                <Typical
        steps={['Web Developper', 1200, 'Web Developper & Web Designer', 800]}
        loop= {Infinity}
        wrapper="h1"
      />
                <button className='btn CTA'>{datas.basic_info.cta}</button>
            </div>
        </div>
    )
}

export default Banner