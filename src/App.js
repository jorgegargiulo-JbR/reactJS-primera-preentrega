import "bulma/css/bulma.min.css"; 
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="container has-background-light">
      <NavBar />
      <section className="section has-text-centered">
        <div className="box has-background-beige p-6">
          <h1 className="title is-2 has-text-weight-bold has-text-brown">
            <ItemListContainer greeting={"Bienvenidos a mi mundo"} />
          </h1>
          <p className="subtitle is-4 has-text-brown">
            Descubre la mejor selección de café artesanal y accesorios para baristas.
          </p>
        </div>
      </section>
      
    </div>
  );
}

export default App;

