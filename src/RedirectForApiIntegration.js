

import Intro from "./Intro";
import Contact from "./Contact";
import Content from "./Content";
import Section from "./Section";
import { Button } from "react-scroll";
import './Redirect.scss'
import { useEffect,useState } from "react";



function Musiquizz() {

    const [link,setLink] = useState();

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('code')
        setLink("https://matheusreimer.github.io/MySite/?code="+code);
    },[])

    
    return (
      <div className="container">
            <div className="button">
                <a href={link} >Redirect to Spotify Auth</a>
            </div>
      </div>
      );
  }
  
  export default Musiquizz;