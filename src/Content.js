import './Content.scss';
import Section from "./Section";
import First from "../src/imgs/first.jpg"
import Sec from "../src/imgs/sec.jpg"
import Third from "../src/imgs/third.jpg"
import Fourth from "../src/imgs/fourth.jpg"
import Fifth from "../src/imgs/fifth.jpg"
import Sixth from "../src/imgs/sixth.jpg"



function Content() {
  return (
    <div className="contentContent">
        <Section id="content"></Section>
        <div className='projectsTitle'>
        <h1 >A few of my projects</h1>
        <p>Case studies</p>
        </div>

        <div className='blocks'>
            <div className='childrenBlocks'>
                <a>
                    <img src={First}></img>
                </a>
                <div className='imageDescriptionLayerDefault'>
                <p className='imageDescriptionDate'>2021</p>
                <p className='imgDescription'>Realstate Website</p>
                </div>
                <div className='imageDescriptionLayer'>
                    <p className='imgDescription'>A project made for a recently created real estate company.<br></br><br></br><br></br><a href="https://github.com/MatheusReimer/Django-React-Realstate">See Project Structure --></a></p>
                </div>
            </div>
            <div className='childrenBlocks'>
                <a>
                    <img src={Sec}></img>
                </a>
                <div className='imageDescriptionLayerDefault'>
                <p className='imageDescriptionDate'>2020-2021</p>
                <p className='imgDescription'>Personal Trainer Website</p>
                </div>
                <div className='imageDescriptionLayer'>
                    <p className='imgDescription'>Project made for a recently graduated physical educator<br></br><br></br><br></br><a href="https://github.com/MatheusReimer/PersonalTrainerSite">See Project Structure --></a></p>
                </div>
            </div>
            <div className='childrenBlocks'>
                <a>
                    <img src={Third}></img>
                </a>
                <div className='imageDescriptionLayerDefault'>
                <p className='imageDescriptionDate'>2017-2018</p>
                <p className='imgDescription'>Minimum Spanning Tree</p>
                </div>
                <div className='imageDescriptionLayer'>
                    <p className='imgDescription'>This is a project made out of curiosity to understand how MST work<br></br><br></br><br></br><a href="https://github.com/MatheusReimer/MinimalSpanningTree">See Project Structure --></a></p>
                </div>
            </div>
            <div className='childrenBlocks'>
                <a>
                    <img src={Fourth}></img>
                </a>
                <div className='imageDescriptionLayerDefault'>
                <p className='imageDescriptionDate'>2021</p>
                <p className='imgDescription'>Intermediate API</p>
                </div>
                <div className='imageDescriptionLayer'>
                    <p className='imgDescription'>This project was a trial task for Take Blip<br></br><br></br><br></br><a href="https://github.com/MatheusReimer/ApiCSHARPbotTakeBlip">See Project Structure --></a></p>
                </div>
            </div>
            <div className='childrenBlocks'>
                <a>
                    <img src={Fifth}></img>
                </a>
                <div className='imageDescriptionLayerDefault'>
                <p className='imageDescriptionDate'>2021</p>
                <p className='imgDescription'>Assembly Project</p>
                </div>
                <div className='imageDescriptionLayer'>
                    <p className='imgDescription'>This is a college project to better understand symbolic machine code<br></br><br></br><br></br><a href="https://github.com/MatheusReimer/AssemblyProject">See Project Structure --></a></p>
                </div>
            </div>
            <div className='childrenBlocks'>
                <a>
                    <img src={Sixth}></img>
                </a>
                <div className='imageDescriptionLayerDefault'>
                <p className='imageDescriptionDate'>2022</p>
                <p className='imgDescription'>OpenGL Project</p>
                </div>
                <div className='imageDescriptionLayer'>
                    <p className='imgDescription'>Project to better understand 3d rendering<br></br><br></br><br></br><a href="https://github.com/MatheusReimer/RotatitingCube3D">See Project Structure --></a></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Content;
