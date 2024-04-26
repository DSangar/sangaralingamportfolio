import React from 'react'
import Logo from './images/image4rb.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Header(){
    const[text]=useTypewriter({
        words:['UI/UX Devaloper', 'FullStack Developer','MERN Stack Devaloper', 'Web Disigner'],
        loop:{},
        typeSpeed:120,
    })

    const marginbtn={
    
    }

    

    return(
        // <div><h1>I'M Sangaralingam</h1></div>

        <section className='homesection' data-aos="fade-up" id='Home'>
            <div class="container-fulid Home">
            
            <br />
            <br />

                <div class="row">
                    <div class="Home-Scetion col-xs-10 col-sm-10 col-lg-8" data-aos-duration="3500" data-aos="fade-right" >

                        <div className="container name-section">
                            <h1 data-aos-duration="4500" data-aos="fade-down-right" >Sangaralingam D</h1>
                            <h3>I'm a <span>{text}</span> 
                            <Cursor cursorStyle='"-"' /></h3>
                            <br />
                            <h6>Learn Every Day ...
                                Error make good Devaloper</h6>
                            <br />
                            

                                <button type="button" class="btn rounded-pill btn-outline-secondary">Let's Chat</button> 

                                <span className='homebutn'>
                                    
                                    <button type="button" class="btn btn-info rounded-pill" >Download CV</button>
                                </span>
                                

                                <div>
                                    <br />
                                    <br />
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    </button><span>         </span>
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-facebook"></i>
                                    </button><span>         </span>
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-twitter"></i>
                                    </button><span>         </span>
                                    <span>         </span>
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    </button><span>         </span>
                                </div>
                            
                        
                            
                        </div>

                    
                    </div>
                    
                    <div className="photo moveArrow col-xs-2 col-sm-2 col-lg-4" >
                        <br />
                        <br />
                        <img className="Header-image img-fluid" src={Logo} alt="" srcset="" />
                    </div>
                </div>
                <br />
                <br /><br />
            </div>

        </section>
        
    )

}
export default Header