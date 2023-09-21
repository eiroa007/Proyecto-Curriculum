import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
       <div className="educacion">
       <div className="educacion.card">
      {education.map((item) => (
          <div key={JSON.stringify(item)}>
            <p className="name">📕 {item.name}</p>
            <p>{item.where}</p>
            <p>{item.date}</p>
    </div> 
  ))
}
</div>
    </div>
    </div>
  );
};

export default Education;


