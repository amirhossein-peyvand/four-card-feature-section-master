import calculator from "./assets/icon-calculator.svg";
import karma from "./assets/icon-karma.svg";
import supervisor from "./assets/icon-supervisor.svg";
import teamBuilder from "./assets/icon-team-builder.svg";
import "./sass/main.scss";

function App() {
  return (
    <main className="mainContainer">
      <header className="header">
        <h2 className="feature">Reliable, efficient delivery</h2>
        <h2 className="powered">Powered by Technology</h2>
        <p className="desc">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="cardsContainer">
        <article className="supervisor">
          <div></div>
          <section className="top">
            <h4>Supervisor</h4>
            <p>Monitors activity to identify project roadblocks</p>
          </section>
          <section className="bottom">
            <img src={supervisor} alt="supervisor" />
          </section>
        </article>
        <article className="teamBuilder">
          <div></div>
          <section className="top">
            <h4>Team Builder</h4>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
          </section>
          <section className="bottom">
            <img src={teamBuilder} alt="teamBuilder" />
          </section>
        </article>
        <article className="karma">
          <div></div>
          <section className="top">
            <h4>Karma</h4>
            <p>Regularly evaluates our talent to ensure quality</p>
          </section>
          <section className="bottom">
            <img src={karma} alt="karma" />
          </section>
        </article>
        <article className="calculator">
          <div></div>
          <section className="top">
            <h4>Calculator</h4>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
          </section>
          <section className="bottom">
            <img src={calculator} alt="calculator" />
          </section>
        </article>
      </section>
    </main>
  );
}

export default App;
