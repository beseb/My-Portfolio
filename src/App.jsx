import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';

import About from '../src/components/About';
import Banner from '../src/components/Banner';
import ContactForm from './components/ContactForm';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';

import sharedDatas from './assets/datas/portfolio_shared_data.json';
import primaryLangDatas from './assets/datas/res_primaryLanguage.json';
import secondaryLangDatas from '../src/assets/datas/res_secondaryLanguage.json';

import './styles/main.scss';

function App() {
  return (
    <main>
      <Header />
      <Banner datas={primaryLangDatas} />
      <About datas={primaryLangDatas} />
      <Projects datas={primaryLangDatas} />
      <Skills datas={sharedDatas} />
      <Experiences datas={primaryLangDatas} />
      <ContactForm />
      <Footer />
    </main>
  );
}
export default App;
