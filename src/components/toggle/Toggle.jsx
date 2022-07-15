import React, { useContext } from 'react';
import './toggle.css';
import sun from '../../img/sun.png';
import moon from '../../img/moon.png';
import { ThemeContext } from '../../reducer'

const Toggle = () => {

    const theme = useContext(ThemeContext)

    const handleClick = (e) =>{
        // e.preventDefault(); 
        theme.dispatch({type: "TOGGLE"})
    }

    return (
    <div className='t'>
        <img src={sun} alt="" className="t-icon-s" />
        <img src={moon} alt="" className="t-icon-m" />
        <div className="t-button" onClick={(e)=>handleClick(e)} style= {{left: theme.state.darkMode ? 0 : 25}}> </div>
    </div>
  )
}

export default Toggle