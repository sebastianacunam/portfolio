import React, { useContext, useRef, useState } from 'react';
import './contact.css';
import linkedin from '../../img/linkedin.png';
import email from '../../img/mail.png';
import pointer from '../../img/pointer.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../reducer'

const Contact = () => {

    

    function validate (input){
        let errors = {};
        const correctEmail = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}"

        if(!input.user_name){
            errors.user_name = "This field is required"
        }
        if(!input.user_subject){
            errors.user_subject = "This field is required"
        }

        if(!input.user_email){
            errors.user_email = "This field is required"
        }else if (!input.user_email.match(correctEmail)){
            errors.user_email = "Please insert a valid email"
        }

        if(!input.message){
            errors.message = "This field is required"
        }
    
        return errors
    }

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const [errors, setErrors] = useState({}) 
    const [input, setInput] = useState({
        user_name: "",
        user_subject: "",
        user_email: "",
        message: ""
    })

    const theme = useContext(ThemeContext)
    const darkModeOn = theme.state.darkMode

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.user_name && input.user_subject && input.user_email && input.message && !errors.user_email){
            emailjs.sendForm('service_eyylsip', 'template_pcy837p', formRef.current, 'NzGKT9oDPSFX-k57X')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
        } else {
            alert("There are missing inputs! Please fill the form before sending!")
        }

    }

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
                <form className='c-form' ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
                    <input style={{backgroundColor: darkModeOn ? "#333" : "white"}} className='c-input' type="" placeholder='Name' name="user_name" onChange={(e)=>handleChange(e)} value={input.user_name}/>
                    {errors.user_name && (<p className='p-errors'>{errors.user_name}</p>)}
                    
                    <input style={{backgroundColor: darkModeOn ? "#333" : "white"}} className='c-input' type="" placeholder='Subject' name="user_subject" onChange={(e)=>handleChange(e)} value={input.user_subject}/>
                    {errors.user_subject && (<p className='p-errors'>{errors.user_subject}</p>)}
                  
                    <input style={{backgroundColor: darkModeOn ? "#333" : "white"}} className='c-input' type="" placeholder='Email' name="user_email" onChange={(e)=>handleChange(e)} value={input.user_email}/>
                    {errors.user_email && (<p className='p-errors'>{errors.user_email}</p>)}
                   
                    <textarea style={{backgroundColor: darkModeOn ? "#333" : "white"}} className='c-textarea' rows="5" placeholder='Message...' name="message" onChange={(e)=>handleChange(e)} value={input.message}></textarea>
                    {errors.message && (<p className='p-errors-m'>{errors.message}</p>)}
                   
                    <button className='c-btn'>Submit</button>
                    {done && <p className='p-submit'>I have received your message! I'll get in touch asap!</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact