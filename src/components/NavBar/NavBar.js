import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar has-background-brown p-3">
      <div className="navbar-brand ml-4">
        {/* Espacio para el logo */}
        <div className="navbar-item">
          <div className="logo-placeholder"></div>
        </div>
        <a className="navbar-item title is-3 has-text-white" href="/">
          Barista Luciano
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start ml-5"> 
          <a className="navbar-item has-text-white is-size-5" href="/">Home</a>
          <a className="navbar-item has-text-white is-size-5" href="/productos">Productos</a>
          <a className="navbar-item has-text-white is-size-5" href="/contacto">Contacto</a>
        </div>
        <div className="navbar-end mr-4">
          <div className="navbar-item">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
