import faBars from '../../public/icons/faBars.svg'
import '../styles/main.scss'
function MobileNav(){

  const btnMobileNav = document.querySelector('.btnMobileNav');
  let isOpen = false;

  function handleClick(){
  const mobileNav = document.querySelector('.mobileNav');
    
  }

return(

    <div>
      <button onClick={handleClick} className="btnMobileNav"><img src={faBars} alt='open Menu'/></button>
      <nav className='mobileNav open'>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#experiences'>Experiences</a>
          <a href='#contactForm'>Contact</a>
          <div className='nav_buttons'>
            <button className='setLangage'>🚩</button>
            <button className='setThemeColor'>🌙</button>
          </div>
        </nav>
    </div>
)

}
export default MobileNav