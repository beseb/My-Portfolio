/* eslint-disable react/prop-types */
import '../styles/main.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function Carousel({ project }) {
  const images = project.images[0];

  const navigateBefore = ()=>{
    console.log('handleBefore clicked !')

  }
  const navigateNext = ()=>{
    console.log('navigateNext clicked !')

  }
  

  return (
    <div className='carousel_container' style={{backgroundImage:{images}, backgroundSize:'cover'}}>
        <div className="left-btn-container" onClick={navigateBefore}><NavigateBeforeIcon className='--btnPrev'/></div>
        <div className="right-btn-container" onClick={navigateNext}><NavigateNextIcon className='--btnNext'/></div>
    </div>
  );
}
export default Carousel;
