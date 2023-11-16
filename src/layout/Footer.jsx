import '../styles/main.scss';
import seaLogo from '/images/SEA-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
/* eslint-disable react/prop-types */

function Footer() {
  return (
    <footer>
      <img src={seaLogo} alt='Logo SEA Web-Studio' className='seaLogo' />
      <div className='--content'>
        <div className="links">
          <a
            href='http://github.com/beseb'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} style={{height:'3em', color:"white"}}/>
          </a>
          <a
            href='https://www.linkedin.com/in/sebastien-escudero/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} style={{height:'3em', color:"white"}}/>
          </a>
          <button>
            <FontAwesomeIcon icon={faEnvelope} style={{height:'3em', color:"black", border:"none"}}/>
          </button>
        </div>

        <span className='copyright'>
          © 2023 SEA Web-Studio. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
export default Footer;
