import React from 'react'
import './intro.css'
import sebas from '../../img/Sebas-removebg.png'
import cv from '../../utils/cv.pdf'

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
                        I develop websites for customers of all sizes.
                        I love teamwork, I really like to interact 
                        with my co-workers and I am very good at communication! 
                        I'm also, always, willing to learn new technologies.                 
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