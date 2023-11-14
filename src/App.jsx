import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';

import About from '../src/components/About';
import Banner from '../src/components/Banner';
import ContactForm from './components/ContactForm';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';

import sharedDatas from './assets/datas/portfolio_shared_data.json';
import primaryDatas from './assets/datas/res_primaryLanguage.json';
import secondaryDatas from '../src/assets/datas/res_secondaryLanguage.json';

function App() {
  return (
    <div>
      <Header />
      <Banner datas={sharedDatas} />
      <About datas={sharedDatas} />
      <Projects datas={primaryDatas} />
      <Skills datas={sharedDatas} />
      <Experiences datas={primaryDatas} />
      <ContactForm />
      <Footer datas={sharedDatas} />
    </div>
  );
}
export default App;
