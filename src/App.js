import "./App.css";
import logo from "./images/quil.jpg";
import eye from "./images/Shape.png";
import etheriumm from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import female from "./images/image-avatar.png";

function App() {
  return (
    <div className="App">
      <div className="App-Card">
        <div className="MainFigure">
          <figure className="">
            <img alt="" src={logo} className="Quilimg" />
            <img alt="" src={eye} className="TigerEye" />
          </figure>
        </div>
        <div className="topText">
          <h3>Equilibrium #3429</h3>
          <p>Our Equilibrium collection promotes balance and calm</p>
        </div>
        <div className="EtherTextParent">
          <div className="EtherSpan">
            <figure className="">
              <img alt="" src={etheriumm} />
            </figure>
            <span>0.041ETH</span>
          </div>
          <div className="ClokSpan">
            <figure className="">
              <img alt="" src={clock} />
            </figure>
            <span>3 days left</span>
          </div>
        </div>
        <div className="CardFooter">
          <figure className="">
            <img alt="" src={female} className="Jules" />
          </figure>
          <p>
            Creation of <span className="JulesSpan">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
