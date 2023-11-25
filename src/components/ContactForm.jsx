import React from "react";
import { useState } from "react";
import { useForm, ValidationError, FormspreeProvider } from "@formspree/react";
import "../styles/main.scss";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SeaLogo from "/images/SEA-logo.svg";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";
import imgMap from "/images/map.jpg";

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
          <img src={SeaLogo} className="SEALogo" alt="Logo of SEA Webstudiod"/>
          <div className="content">
            <LocalPhoneIcon />
            <h3 className="section-title">Tél. :</h3>
            <h4>+33 6 12 34 56 78</h4>
          </div>
          <div className="content">
            <SendIcon />
            <h3 className="section-title">Mail</h3>
            <h4>sebastien.escudero@gmail.com</h4>
          </div>
          <div className="infos">
            <div className="content">
              <PlaceIcon />
              <img src={imgMap} className="imgMap" />
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
                placeholder="Your name"
                required
                aria-required
              />
            </div>
            <div className="form-content">
              <AlternateEmailIcon />
              <label htmlFor="email">{name}</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your e-mail"
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
                placeholder="Your message"
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
            Submit
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
