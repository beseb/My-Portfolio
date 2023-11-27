import React from "react";
import { useForm, ValidationError, FormspreeProvider } from "@formspree/react";
import "../styles/main.scss";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SeaLogo from "/images/SEA-logo2.png";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";
import imgMap from "/images/map.webp";

function ContactForm({ datas, isContactOpen, setIsContactOpen }) {
  // Fonction pour arrêter la propagation et fermer la modal
  const handleCloseClick = (event) => {
    event.stopPropagation(); // Empêche le clic de se propager au div.modal_overlay
    setIsContactOpen(); // Appelle la fonction pour fermer la modal
  };
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    console.log("btn clicked");
    return alert("Thank you for your message !");
  }
  return (
    <div
      className="contactForm"
      style={{ display: isContactOpen ? "flex" : "none" }}
    >
      <div className="contactForm_wrapper" onClick={(e) => e.stopPropagation()}>
        <CloseIcon
          className="contactForm_wrapper btnClose"
          icon="fa-solid faXmark "
          onClick={handleCloseClick}
        />
        <div className="contactForm_header">
          <div className="|">
            <img
              src={SeaLogo}
              className="SEALogo"
              alt="Logo of SEA Webstudio"
            />
          </div>
          <div className="infos-wrapper">
            <LocalPhoneIcon />
            <h3 className="section-title tel">Tél.</h3>
            <a href="tel:+33612345678">
              <h4>+33 6 12 34 56 78</h4>
            </a>
          </div>
          <div className="infos-wrapper">
            <SendIcon />
            <h3 className="section-title mail">Mail</h3>

            <a href="mailto:sebastien.escudero@gmail.com">
              <h4>sebastien.escudero@gmail.com</h4>
            </a>
          </div>
          <div className="map-section">
            <div id="leaflet-map">
              <img src={imgMap} alt="localisation of SEA WebStudio"></img>
            </div>
            <div className="infos-wrapper">
              <PlaceIcon />
              <h3 className="section-title place">Place</h3>
              <a href="https://www.google.com/maps/place/Jardin+public+des+Capucins/@48.8083213,3.0931438,15.75z/data=!4m6!3m5!1s0x47e8b1a8af1147f7:0x88870b168fc802d0!8m2!3d48.810835!4d3.0868095!16s%2Fg%2F11b6gqjphm?entry=ttu" target="_blank" rel='norereffer noopener'>
                <h4>
                  1, Avenue de la République, <br />
                  77120 Coulommiers
                </h4>
              </a>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/p/2346908508634480159/f/contactForm"
          method="POST"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <div className="form-content">
              <PermIdentityIcon />
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={datas.basic_info.contactName}
                required
                aria-required
              />
            </div>
            <div className="form-content">
              <AlternateEmailIcon />
              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={datas.basic_info.mail}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-content">
              <ChatBubbleOutlineIcon />
              <textarea
                id="message"
                name="message"
                placeholder={datas.basic_info.message}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </fieldset>
          <button type="submit" disabled={state.submitting} id="submit">
            Envoyer
          </button>
        </form>
      </div>
      <div className="modal_overlay" onClick={handleCloseClick}></div>
    </div>
  );
}

function Contact({ datas, isContactOpen, setIsContactOpen }) {
  return (
    <FormspreeProvider project="2346908508634480159">
      <ContactForm
        datas={datas}
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      />
    </FormspreeProvider>
  );
}
export default Contact;
