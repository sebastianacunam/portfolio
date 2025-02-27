import React from 'react'
import './intro.css'
import sebas from '../../img/Sebas-removebg.png'
import cv from '../../utils/cv2025.pdf'

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hi! My name is</h2>
                <h1 className='i-name'>Sebastián Acuña</h1>
                <div className="i-titles">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">fullstack web developer</div>
                        <div className="i-title-item">frontend and backend</div>
                        <div className="i-title-item">creative</div>
                        <div className="i-title-item">communicative</div>
                        <div className="i-title-item">coffee drinker☕</div>
                    </div>
                </div>
                <div className='i-desc'>
                    <h4>
                    I specialize in developing websites for clients of all sizes, 
                    delivering tailored solutions to meet diverse needs. I thrive in 
                    collaborative environments, enjoy engaging with my team, and excel 
                    in clear, effective communication.
                    </h4>

                    {/* <a href="documento.pdf" download="mi-archivo.pdf">Descargar</a> */}
                </div>
                    <a className="i-btn" href={cv} download> download cv</a>
            </div>    
        </div>
        {/* this will let me remind the separation between the left and right side */}
        <div className='i-right'>
            <div className='i-bg'></div>
            <img className='i-img' src={sebas} alt="Img not found" />    
        </div>
    </div>
  )
}

export default Intro