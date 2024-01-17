import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/navBar'
import Portofolio from './components/Portofolio';
// import Space from './components/space';


import Social from './components/Social';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <About/>
    <Portofolio/>
    {/* <Space/> */}
    <Experience/>
    <Contact/>

     <Social/>
     </div>
  );
}

export default App;
