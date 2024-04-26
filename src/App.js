import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Profile from "./Profile1.jsx";
import Project from "./Project.jsx";
import Jounery from "./Jounery.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx"
import Footer  from "./Footer1.jsx";



function App(){
  // function namechange() {

  //   const name = ['Try','One step away', 'Succes now','Fire Now'];
  //   const int = Math.floor(Math.random()*4);
  //   return name[int]
    
  //  }
  return(

    <div>

      <Navbar/>
      
      <Header/>
      <Profile/>
      <Project/>
      <Jounery/>
      <Skills />
      <Contact />
      <Footer/>
      
      
      
    </div>
  )
  

};




export default App;
