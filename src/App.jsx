import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";

import About from "../src/components/About";
import Banner from "../src/components/Banner";
import ContactForm from "./components/ContactForm";
import ExperiencesVertical from "./components/ExperiencesVertical";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import sharedDatas from "./assets/datas/portfolio_shared_data.json";
import primaryLangDatas from "./assets/datas/res_primaryLanguage.json";
import secondaryLangDatas from "../src/assets/datas/res_secondaryLanguage.json";

import "./styles/main.scss";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import ContactContext from "./components/ContactContext";

function App() {
  const contactCxt = useContext(ContactContext);
  const [isContactOpen, setIsContactOpen] = useState(contactCxt);

  return (
    <main>
      <ContactContext.Provider value={{ isContactOpen, setIsContactOpen }}>
        <Header
          datas={primaryLangDatas}
          isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
        />
        <Banner datas={primaryLangDatas} />
        <About
          datas={primaryLangDatas}
          isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
        />
        <Projects datas={primaryLangDatas} />
        <ExperiencesVertical datas={primaryLangDatas} />
        <Skills datas={sharedDatas} />
        <Footer
        datas={sharedDatas}
          isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
        />
      </ContactContext.Provider>
    </main>
  );
}
export default App;
