import "./About.css";  

const About = ({ hero }) => {
  return (
    <div>

      {hero.aboutMe.map((item) => (
       <div key={JSON.stringify(item)}>
        <p Key={item.info}>{item.info}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
