import './Intro.scss'
import Img from "../src/imgs/logo.png"
import Germany from "../src/imgs/alemanha.png"
import Brazil from "../src/imgs/brasil.png"
import Eua from "../src/imgs/estados-unidos.png"
import { FaMouse } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";

function Intro() {
    return (
      <div className="intro">
          <div className="headers">
              <div className="left">
                  <img src={Img} className="logo" alt='logo'></img>
                  <ul>
                  <li><h3 className='logoName'>Matheus Reimer</h3><br></br></li>
                  <li><h2>Software Engineer</h2></li>
                  </ul>
                  
                
              </div>
              <div className="right">

              </div>
          </div>
          <div className="content">
              <div className="leftContent">
                  <div className="textContent">
                      <h3 className="title">Matheus Henrique Reimer</h3>
                      <h1 className="who">Who am I?</h1>
                      <p className="aboutMe">
                    -I'm a Computer Science student currently working as Chatbot developer - Junior Software Engineer<br></br>
                    -I have 3 years of experience in the technology field.<br></br>
                    -Recently I've been interested in backend development and thats how and why I got my current job. You can check a few of my projects <a href="https://github.com/MatheusReimer?tab=repositories">here</a> <br></br>
                    -I am currently in the 6th semester of Computer Science at Univali - Itajaí -BR<br></br>
                    -Next semester I have plans to continue my college in Germany for 1 year at Deggendorf <br></br>
                    -I'm also fascinated about other cultures and languages, thus the reason I know Portuguese, English and now a bit of German <img src={Brazil} alt="brazilFlag"></img> <img src={Eua} alt="euaFlag"></img> <img src={Germany} alt="germanyFlag"></img>
                     </p>
                  </div>
                  <div className='continue'>
                <ul className="nav-items">
                <li className="nav-item">

                <a href='#content' className='icon'><FaMouse></FaMouse></a>
                
                </li></ul>
                </div>
              </div>
              <div className="rightContent">
                  <ul>
                      <li><a href="https://www.linkedin.com/in/matheus-reimer-636b10187/">Linkedin</a></li>
                      <li><a href="https://www.github.com/MatheusReimer"></a>Github</li>
                      <li><a href='https://stackoverflow.com/users/15334564/matheus-reimer'></a>StackOverflow</li>
                      <li><a href="mailto:matheusreimer1@gmail.com">E-mail</a></li>
                      <li><a href="https://api.whatsapp.com/send?phone=5547991101803&text=Hello%20Matheus%21%20I%20would%20like%20to%20chat%20.">Whatsapp</a></li>
                  </ul>
              </div>
              <div className='nav-items-container'>
              <ul className="nav-items">
                <li className="nav-item">
                <Link
                activeClass="active"
                to="content"
                spy={true}
                smooth={true}
                duration={1000}
                >
                See more<FaMouse className="icon" ></FaMouse>
                </Link>
                </li></ul>
                </div>
          </div>
      </div>
    );
  }
  
  export default Intro;
  