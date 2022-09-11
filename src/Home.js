

import Intro from "./Intro";
import Contact from "./Contact";
import Content from "./Content";
import Section from "./Section";

function Home() {

    return (
        <div className="Home" style={{backgroundColor:"white"}}>
        <Intro></Intro>
        <Content></Content>
        <Contact></Contact>
      </div>
      );
  }
  
  export default Home;