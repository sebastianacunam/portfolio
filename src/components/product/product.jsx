import React, { useContext } from 'react'
import { ThemeContext } from '../../reducer'
import './product.css'

const Product = ({img, link}) => {

  const theme = useContext(ThemeContext)
  const darkModeOn = theme.state.darkMode

  return (
    <div className='p'>
      <div className='p-browser' style={{backgroundColor: darkModeOn? "white" : " #333"}}>
        <div className='p-circle' style={{backgroundColor: darkModeOn ? "#333" : "white"}}></div>
        <div className='p-circle' style={{backgroundColor: darkModeOn ? "#333" : "white"}}></div>
        <div className='p-circle' style={{backgroundColor: darkModeOn ? "#333" : "white"}}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="Img not found" className='p-img'/>
      </a>
    </div>
  )
}

export default Product