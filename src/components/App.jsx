import "../styles/index.scss";
import Recipes from "./recipes";

const App = () => {
  return (
    <>
      <section className="hero">
        <main>
          <section>
            <h1>Hello, React</h1>
          </section>
        </main>

        <Recipes />
      </section>
    </>
  );
};

export default App;
