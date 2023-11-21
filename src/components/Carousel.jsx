/* eslint-disable react/prop-types */
import { width } from '@mui/system';
import Carousel from 'react-material-ui-carousel';

function ImageCarousel({ data }) {
    const items = data.images;
   
    return (
      <div className="carouselWrapper">
        <Carousel className='carousel'
          autoPlay={true}
          interval={3000}
          cycleNavigation={true}
          navButtonsAlwaysVisible={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    );
  }
export default ImageCarousel;
function Item({ item }) {
  return <img src={item} className='carouselImage'/>;
}
