/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div>
      <nav className="my-2">
        <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
      
        <div className="navbarCollapse">
          <ul className="navbar me-auto mb-lg-0 ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
           

          </ul>
          <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
           </form>
        </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 cl>Shop in style</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
