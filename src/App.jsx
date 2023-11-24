import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import About from "./sections/About";
import Banner from "./sections/Banner";
import ExperiencesVertical from "./sections/ExperiencesVertical";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import sharedDatas from "./assets/datas/portfolio_shared_data.json";
import { useState, useContext } from "react";
import ContactContext from "./utils/ContactContext";
import { LangProvider } from "./utils/LangContext";
import "./styles/main.scss";

function App() {
  const contactCxt = useContext(ContactContext);

  const [isContactOpen, setIsContactOpen] = useState(contactCxt);

  return (
    <main>
      <ContactContext.Provider value={{ isContactOpen, setIsContactOpen }}>
        <LangProvider>
          <Header
            isContactOpen={isContactOpen}
            setIsContactOpen={setIsContactOpen}
          />
          <Banner />
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
          />
        </LangProvider>
      </ContactContext.Provider>
    </main>
  );
}
export default App;
