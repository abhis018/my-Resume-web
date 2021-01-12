// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Body/> 
      <About/>
      <Resume/>
      <Achievements/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
