/* eslint-disable react/prop-types */

function Header() {
  return (
    <div>
      <img src='../assets/react.svg' alt='Logo SEA Web-Studio' />
      <nav>
        <a href='#About'>About</a>
        <a href='#Projects'>Projects</a>
        <a href='#Experiences'>Experiences</a>
        <a href='#ContactForm'>Contact</a>
      </nav>
      {/* <div className="langagePickerDiv">
                <div onClick={()=>{
                    setLangage = "english";
                }}><span><img
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" height={"30px"} width={"30px"}/></span></div>
                <div onClick={()=>{
                    setLangage = "french"
                }}><span><img
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"height={"30px"} width={"30px"} /></span></div>
                </div> */}
    </div>
  );
}

export default Header;
