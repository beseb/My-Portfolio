import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";

import About from "../src/components/About";
import Banner from "../src/components/Banner";
import ContactForm from "./components/ContactForm";
import ExperiencesVertical from "./components/ExperiencesVertical";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import sharedDatas from "./assets/datas/portfolio_shared_data.json";
import eng_Datas from "./assets/datas/primaryLanguage.json";
import fr_Datas from "./assets/datas/secondaryLanguage.json";

import "./styles/main.scss";
import { useState } from "react";
import { useContext } from "react";
import ContactContext from "./utils/ContactContext";
import { LangProvider } from "./utils/LangContext";

function App() {
  const contactCxt = useContext(ContactContext);

  const [isContactOpen, setIsContactOpen] = useState(contactCxt);

  return (
    <main>
      <ContactContext.Provider value={{ isContactOpen, setIsContactOpen }}>
        <LangProvider >
          <Header
            isContactOpen={isContactOpen}
            setIsContactOpen={setIsContactOpen}
           
          />
          {/* <Banner />
        <About
          isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
        />
        <Projects />
        <ExperiencesVertical />
        <Skills datas={sharedDatas} />
        <Footer
          isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
        /> */}
        </LangProvider>
      </ContactContext.Provider>
    </main>
  );
}
export default App;
