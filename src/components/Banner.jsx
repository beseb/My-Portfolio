/* eslint-disable react/prop-types */
import Typical from 'react-typical';
import '../styles/main.scss';
import seaLogo from '/images/SEA-logo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Banner({ datas }) {
  return (
    <div className='banner-section'>
      <img src={seaLogo} alt='Logo SEA Web-Studio' />
      <div className='content'>
        <Typical
          steps={['Web Dev', 1200, 'Web Developper & Designer', 800]}
          loop={Infinity}
          wrapper='h1'
        />
        <a href='#about' className='btn CTA'><ExpandMoreIcon fontSize='large' color='white' className='CTA'/></a>
      </div>
    </div>
  );
}

export default Banner;
