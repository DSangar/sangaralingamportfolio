import Html from "./images/skills-icons/html.svg";
import Css from "./images/skills-icons/css.svg";
import JS from "./images/skills-icons/javascript.svg";
import Bootstrap from "./images/skills-icons/boostrap.svg";

import React1 from "./images/skills-icons/react.svg";
import Node from "./images/skills-icons/nodejs.svg";
import Mangodb from "./images/skills-icons/mongodb.svg";
import NPm from "./images/skills-icons/npm.svg";


function skills(){

   
    return(

        <section className="Skillssection" id="Skills">

            
            <div className="container-fluid bg-color1 project">
                <div className="">
                
                
                <br />
                <br />
                
                    <br />
                    <br />
                    
                    
                    <h1 className='d-flex justify-content-center text-info mb-3 '><u><strong>Skills</strong></u></h1> 
                


            
                </div>
                <div className="text-drak">
                   

                    
                    <div class="container-fluid">
                        <div class="row">
                            <div className="col  p-3 skills-images"><img data-aos-duration="2500" data-aos="fade-down" src={Html} alt="html" /></div>
                            <div className="col  p-3 skills-images"><img data-aos-duration="2500" data-aos="fade-down" src={Css} alt="html" /></div>
                            <div className="col  p-3 skills-images"><img data-aos-duration="2500" data-aos="fade-down" src={JS} alt="html" /></div>
                            <div className="col  p-3 skills-images"><img data-aos-duration="2500" data-aos="fade-down" src={Bootstrap} alt="html" /></div>
                        </div> 
                       
                        <div class="row">
                            <div class="col  p-3 skills-images"><img data-aos-duration="3500" data-aos="fade-down"src={React1} alt="html" /></div>
                            <div class="col  p-3 skills-images"><img data-aos-duration="3500" data-aos="fade-down"src={NPm} alt="html" /></div>
                            <div class="col  p-3 skills-images"><img data-aos-duration="3500" data-aos="fade-down"src={Mangodb} alt="html" /></div>
                            <div class="col  p-3 skills-images"><img data-aos-duration="3500" data-aos="fade-down"src={Node} alt="html" /></div>

                        </div> 
                        <br />
                        <br />
                    </div>
                        {/* <div className="row">
                        <div className="col-sm-6">

                        <h2 className="text-center">Known</h2>
                        <br />
                            <div className="1">
                             <h5>HTML </h5><span><p>(HyperTextMarkuplangue)</p> </span>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>

                        <br />

                        </div>
                        <div className="col-sm-6">

                        <h2 className="text-center">Mern Stack</h2>

                        <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <div className="1">
                                <h5>React</h5> 
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"} }></div>
                                    </div>
                            </div>
                            <br />
                            <br />
                            <br />


                        </div>

                        </div> */}
                    
                </div>        
            </div>
                    

        </section>
    )

}

export default skills;