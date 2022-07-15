import React from 'react'
import './contact.css'
import linkedin from '../../img/linkedin.png'
import email from '../../img/mail.png'
import pointer from '../../img/pointer.png'

const Contact = () => {
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    tell me about <br/> your project
                </h1>
                <div className='c-info'>
                    <div className="c-info-item">
                        <a href="https://linkedin.com/in/sebastianacunam" target='_blank' rel='noreferrer'>
                            <img src={linkedin} alt="" className="c-icon" />
                        </a>
                    </div>
                    <div className="c-info-item">
                        <a href="mailto:sebasjam96@gmail.com" target='_blank' rel='noreferrer'>
                            <img src={email} alt="" className="c-icon" />
                        </a>
                    </div>
                    <div className="c-info-item">
                        <a href="https://goo.gl/maps/fMLDsZcNAvLqzp937" target='_blank' rel='noreferrer'>
                            <img src={pointer} alt="" className="c-icon" />
                        </a>
                    </div>

                </div>
            </div>
            <div className="c-rigth">
                <p className="c-desc">
                    <b className='c-desc-b'>let's get in touch,</b> I will be responding as soon as possible! so let me know, I'm waiting for you!
                </p>  
                <form className='c-form'>
                    <input className='c-input' type="" placeholder='Name' name="user_name"/>
                    <input className='c-input' type="" placeholder='Subject' name="user_subject"/>
                    <input className='c-input' type="" placeholder='Email' name="user_email"/>
                    <textarea className='c-textarea' rows="5" placeholder='Message...' name="message"></textarea>
                    <button className='c-btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact