import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";"./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";


import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () =>  {
  const [ShowEducation, setEducation] = useState(true);


  return (
  <div className="App">
  <Hero hero={hero} />
  <About hero={hero} />
  <button onClick={() => setEducation(true)}>Education</button>
      <button onClick={() => setEducation(false)}>Experience</button>
      {ShowEducation ? (

  <Education education={education} />
      ) : (
  <Experience experience={experience} />
      )}
      
  <More More={More}
  languages={languages}
  habilities={habilities}
  volunteer={volunteer}
  />
  </div>
  );
  }
  export default App;