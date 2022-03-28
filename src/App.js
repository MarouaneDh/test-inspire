import { useState } from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Opinions from './Opinions/Opinions';
import Trial from './Trial/Trial';

function App() {
  const [generalLang, setGeneralLang] = useState("FR")
  return (
    <div className="App">
      <Navbar setGeneralLang={setGeneralLang} />
      <Banner generalLang={generalLang} />
      <Trial generalLang={generalLang} />
      <Opinions generalLang={generalLang} />
      <Footer generalLang={generalLang} />
    </div>
  );
}

export default App;
