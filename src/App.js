import Intro from "./Intro";
import Contact from "./Contact";
import Content from "./Content";
import Section from "./Section";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Musiquizz from "./RedirectForApiIntegration";

function App() {

  return (
     
    <BrowserRouter>
     <div className="app">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MusiQuizz" element={<Musiquizz/>} />
      </Routes>
    
    </div>
  </BrowserRouter>
);
}

export default App;