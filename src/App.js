import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css'
import Binary from './Component/Binary';
import Decimal from './Component/Decimal';
import Octal from './Component/Octal';
import Hexa from './Component/Hexa';
import {Home, Footer} from './Component/Home';

function App() {
  return (<Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark montfont">
        <Link to="/" className="navbar-brand pmfont"><center>Number <br/>Converter</center></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/binary" className="nav-link">Binary</Link>
            </li>
            <li className="nav-item">
              <Link to="/decimal" className="nav-link">Decimal</Link>
            </li>
            <li className="nav-item">
              <Link to="/hexa" className="nav-link">Hexadecimal</Link>
            </li>
            <li className="nav-item">
              <Link to="/octal" className="nav-link">Octal</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/octal">
          <Octal/>
        </Route>
        <Route path="/hexa">
          <Hexa/>
        </Route>
        <Route path="/decimal">
          <Decimal/>
        </Route>
        <Route path="/binary">
          <Binary/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
    {/*<div className="fixed-bottom">
        <Footer/>
    </div>*/}
  </Router>);
}

export default App;
