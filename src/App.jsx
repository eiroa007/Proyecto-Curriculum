import { useState } from "react";
import "./App.css";
import "./components/Hero/Hero";
import "./components/About/About";
import "./components/Education/Education";
import "./components/Experience/Experience";
import "./components/More/More";


import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () =>  {
  const [ShowEducation, setEducation] = useState(true);


  return (
  <div className="App">
  <Hero hero={hero} />
  <About hero={hero} />
  <Education Educationducation={Education} />
  <Experience experience={experience} />
  <More More={More}
  languages={languages}
  habilities={habilities}
  volunteer={volunteer}
  />
  </div>
  );
  }
  export default App;