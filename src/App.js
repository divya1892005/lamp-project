import React from 'react';
import './App.css';
import Logo from './Assets/logo.png';
import Lamp from './Assets/lamp1.png';
import Light from './Assets/light.png';

export default function App() {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  function toggleBtn() {
    setIsSwitchOn(prevIsSwitchOn => !prevIsSwitchOn)
  }

  return(
    <div>
      <img className='logo' src={Logo} alt='logo' /> 
      <div className='link-nav'>
      <span className='link-btns'>Latest</span>
      <span className='link-btns'>Modern</span>
      <span className='link-btns'>Contemporary</span>
      <span className='link-btns'>Affordable</span>
      <div className="toggle">
        <input 
          onChange={toggleBtn} 
          type="checkbox" 
          checked={isSwitchOn}
          name='isSwitchOn'
          id="toggle-switch"
          />
        <label htmlFor="toggle-switch"></label>
      </div>
      </div>
        <div style={{display: "flex"}}>
          <div>
           <img className='lamp' src={Lamp} alt='lamp' />
            <div>
            {isSwitchOn && <img className='light' src={Light} alt='light' />}
            </div>
            {isSwitchOn && <div className="hello--world" ><h1>Hello World!</h1></div>}
            </div>
            <div className='text-container'>
            <h1 className='latest-text'>Latest <br /> in Lighting</h1>
            <p className='lamp-para'>This is the first lamp from our company. we're making a huge collection of modern lamps in all categories 
                from home use to office use.
            </p>
            <button className='all-collection-btn'>Check All Collections</button>
        </div>
        </div>
    </div>
  )
}