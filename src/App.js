import { isVisible } from '@testing-library/user-event/dist/utils';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-Card">
       <div className='MainFigure'>
        <img src={require('./images/quil.jpg')} className='Quilimg' />
        <img src={require('./images/Shape.png')} className='TigerEye' 
         id='ShowHide' />
       </div>
        <h3>
          Equilibrium #3429
        </h3>
        <p>
          Our Equilibrium collection promotes balance and calm
        </p>
        <div className='EtherTextParent'>
         <div className='EtherSpan'>
         <img src='http://127.0.0.1:5500/src/images/icon-ethereum.svg' />
         <span>0.041ETH</span>
         </div>
         <div className='ClokSpan'>
          <img src='http://127.0.0.1:5500/src/images/icon-clock.svg' />
          <span>3 days left</span>
         </div>
        </div>
        <div className='CardFooter'>
        <img src={require('./images/image-avatar.png')} className='Jules' />
        <p>Creation of <span className='JulesSpan'>Jules Wyvern</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;