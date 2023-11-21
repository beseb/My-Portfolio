/* eslint-disable react/prop-types */
import ImageCarousel from './Carousel';
import '../styles/main.scss';
import CloseIcon from '@mui/icons-material/Close';

function Modal({ isOpen, setIsOpen, project }) {
  // Fonction pour arrêter la propagation et fermer la modal
  const handleCloseClick = (event) => {
    event.stopPropagation(); // Empêche le clic de se propager au div.modal_overlay
    setIsOpen(); // Appelle la fonction pour fermer la modal
  };

  return (
    <div className='modal' style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className='modal_wrapper' onClick={(e) => e.stopPropagation()}>
        <CloseIcon
          className='modal_wrapper--btnClose'
          icon='fa-solid faXmark '
          onClick={handleCloseClick}
        />
        <h3 className='modal_wrapper--title'>{project.title}</h3>
      <ImageCarousel className='.image-carousel' data={project}/>
        <div className='modal_wrapper_content'>
          <p className='modal_wrapper_content--startDate'>
            {project.startDate}
          </p>
          <p className='modal_wrapper_content--description'>
            {project.description}
          </p>
          <ul className='modal_wrapper_content--techs'>
            {project.technologies.map((tech, index) => {
              return (
                <li key={index}>
                  <i className={tech.class} />
                  <span>{tech.name}</span>
                </li>
              );
            })}
          </ul>
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='modal_wrapper_content--linkCTA'
          >
            {project.linkCTA}
          </a>
        </div>
      </div>
      <div className='modal_overlay' onClick={handleCloseClick}></div>
    </div>
  );
}

export default Modal;
