import { createContext, useState, useEffect } from "react";
import english_datas from "../assets/datas/primaryLanguage.json";
import french_datas from "../assets/datas/secondaryLanguage.json";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(true);
  const [datas, setDatas] = useState(french_datas);

  useEffect(() => {
    // Cette fonction sera appelée chaque fois que `lang` change.
    const newDatas = lang ? french_datas : english_datas;
    setDatas(newDatas);
  }, [lang]); // Les crochets indiquent à React de ne réexécuter cet effet que si `lang` change.

  const toggleLang = () => {
    setLang(!lang);
  };
  return (
    <LangContext.Provider value={{ lang, toggleLang, datas }}>
      {children}
    </LangContext.Provider>
  );
};
