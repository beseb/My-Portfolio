import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';

import About from '../src/components/About';
import Banner from '../src/components/Banner';
import ContactForm from './components/ContactForm';
import ExperiencesVertical from './components/ExperiencesVertical';
import Projects from './components/Projects';
import Skills from './components/Skills';

import sharedDatas from './assets/datas/portfolio_shared_data.json';
import primaryLangDatas from './assets/datas/res_primaryLanguage.json';
import secondaryLangDatas from '../src/assets/datas/res_secondaryLanguage.json';

import './styles/main.scss';

import { FormspreeProvider } from '@formspree/react';
function App() {
  return (
    <main>
      <Header datas={primaryLangDatas}/>
      <Banner datas={primaryLangDatas} />
      <About datas={primaryLangDatas} />
      <Projects datas={primaryLangDatas} />
      {/* <ActionAreaCard datas={primaryLangDatas}/> */}
      <ExperiencesVertical datas={primaryLangDatas}/>
      <Skills datas={sharedDatas} />
      
      <Footer />
    </main>
  );
}
export default App;
