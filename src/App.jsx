import { Supervisor, TeamBuilder, Karma, Calculator } from "./Buttons";

function App() {
  return (
    <>
      <div className="principal">
        <p className="title">
          Reliable, efficient delivery
          <br />
          <strong>Powered by Technology</strong>
        </p>
        <p className="description">
          Our Artificial Intelligence powered tools use millions of project data
          <br />
          points to ensure that your project is successful
        </p>
      </div>
      <div className="info">
        <div className="left">
          <div className="supervisor">
            <Supervisor />
          </div>
        </div>
        <div className="center">
          <div className="teambuilder">
            <TeamBuilder />
          </div>
          <br />
          <div className="karma">
            <Karma />
          </div>
        </div>
        <div className="rigth">
          <div className="calculator">
            <Calculator />
          </div>  
        </div>
      </div>
    </>
  );
}

export default App;
