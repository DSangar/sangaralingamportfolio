import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";





function project(){
    return(

        <section className="projectsection" id="Project">

 
            <div className="container-fluid bg-color1 project">
                <div className="">
                
                    <div >
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    <h1 className='d-flex justify-content-center text-info mb-3 '><u><strong>Projects</strong></u></h1> 
                    <br />
                    <br />
                    <br />

                    
                
                    </div>
                    <div className="d-md-flex flex-md-row  mb-3" data-aos="flip-down"data-aos-duration="5500" >
                        <div class="container p-2 ">
                        
                            <div class="card p-2 " >
                                <img class="card-img-bottom" src={image6} alt="Card image"/>
                                <div class="card-body">
                                    <h2>Card Image</h2>
                                    <p>Image at the top (card-img-top):</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>

                            </div>
                        </div>

                        <div class="container p-2 ">
                            
                            <div class="card p-2" >
                                <img class="card-img-bottom" src={image7} alt="Card image"/>
                                <div class="card-body">
                                    <h2>Card Image</h2>
                                    <p>Image at the top (card-img-top):</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div class="container p-2 ">
                            
                            <div class="card p-2" >
                                <img class="card-img-bottom" src={image8} alt="Card image"/>
                                <div class="card-body">
                                    <h2>Card Image</h2>
                                    <p>Image at the top (card-img-top):</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                    </div>
                    <br />
                </div>
            </div>
        </section>

    );
}
export default project;