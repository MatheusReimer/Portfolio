import './Contact.scss';

function Contact() {
  return (
    <div className="Contact">
        <hr></hr>
        <div className='contact'>
            <div className='titleContact'>
                <h1>In need of a developer?</h1>
                <p>Contact me</p>
                <hr></hr>
            </div>
        </div>
        <div className='contactInfo'>
            <div className='column'>
            <h2>Contact Information —</h2>
                <p>Feel free to reach out to me any time.<br></br> I prefer to talk over email, especially since we may be a few time zones away.<br></br><a href="mailto:matheusreimer1@gmail.com">matheusreimer1@gmail.com</a><br></br>
                You can still call me or send me a message <a href="https://api.whatsapp.com/send?phone=5547991101803&text=Hello%20Matheus%21%20I%20would%20like%20to%20chat%20.">(+55)4799110-1803</a></p>
            </div>
            <div className='column'>
            <h2>Latest Projects —</h2>
            <a className="projects" href='https://github.com/MatheusReimer/Grafos-m12'>Graphs<br></br></a>
            <a className="projects" href='https://github.com/MatheusReimer/MinimalSpanningTree'>MST's<br></br></a>
            <a className="projects" href='https://github.com/MatheusReimer/CompiladoresM2-V2'>Compiler Creation<br></br></a>
            <a className="projects" href='https://github.com/MatheusReimer/ReactJSNutrionLandingPage'>Nutricionist Website<br></br></a>
            <a className="projects" href='https://github.com/MatheusReimer/UnderstandingDOTNETCoreConcepts'>.NET Core Concepts<br></br></a>
            </div>
            <div className='column'>
            <h2>Current Availability —</h2>
                <p>I'm currently working as Junior Chatbot Developer <br></br>but I’ll be happy to discuss new opportunities.<br></br> Let’s get in touch!</p>
            </div>
        </div>
    </div>
  );
}

export default Contact;
