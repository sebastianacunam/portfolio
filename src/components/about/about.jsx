import React, { useContext } from 'react'
import './about.css'
import sebasFront from '../../img/Sebasfront.jpg'
import css from '../../img/css.png'
import html from '../../img/html.png'
import javascript from '../../img/javascript.png'
import mongo from '../../img/mongodb.png'
import nodejs from '../../img/nodejs.png' 
import react from '../../img/react.png'
import express from '../../img/express.png'
import postgres from '../../img/postgres.png'
import { ThemeContext } from '../../reducer'

const About = () => {

    const theme = useContext(ThemeContext)
    const darkModeOn = theme.state.darkMode

  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg" style={{backgroundColor: darkModeOn ? "#c6911c" : "#333"}}></div>
            <div className="a-card">
                <img src={sebasFront} alt="" className="a-img" />
            </div>
        </div>
        {/* this will let me remind the separation between the left and right side */}
        <div className="a-right">
        <h1 className="a-title">about me</h1>
        <p className='a-sub'>
            maybe a quick info so you can get to know me a little bit!
        </p>
        <p className='a-desc'>
            My name is Sebastián, better known as Sebas, I'm 26 years old, musician, barista and recently I've discovered I have a huge 
            pasion for coding. I studied systems engineering and, of course, I want to keep opening my knowledge in this new world I'm facing.
        </p>
            <br/>
            <h3 align='center' className='a-h3'>tech stack</h3>
        <div className="a-techStack">
            <div>
                <img src={html} alt="" className='a-img-tech'/>
                <p align='center'>html</p>
            </div>
            <div>
                <img src={css} alt="" className='a-img-tech'/>
                <p align='center'>css</p>
            </div>
            <div>
                <img src={javascript} alt="" className='a-img-tech'/>
                <p align='center'>javascript</p>
            </div>
            <div>
                <img src={react} alt="" className='a-img-tech'/>
                <p align='center'>react</p>
            </div>
            <div>
                <img src={nodejs} alt="" className='a-img-tech'/>
                <p align='center'>nodejs</p>
            </div>
            <div>
                <img src={mongo} alt="" className='a-img-tech'/>
                <p align='center'>mongodb</p>
            </div>
            <div>
                <img src={postgres} alt="" className='a-img-tech'/>
                <p align='center'>postgres</p>
            </div>
            <div>
                <img src={express} alt="" className='a-img-express'/>
                <p align='center'>express</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About