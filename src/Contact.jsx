

function Contact() {

    const handlesumbit=()=>{

    }


  return (
    <section className="contact-scetion" id="Contact">

        <div className="contaniner bg-secondary">
            <br />
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="wrapper">
                        <div className="row no-gutters">
                            <div className="col-md-6 mgs" data-aos="flip-left" data-aos-duration="2500">
                                <div className="contact-wrap w100 p-lg-5 p-4">
                                    <h3 className="mb-4">
                                        Send us a Message
                                    </h3>
                                    <form id="contactFrom" className="contactform" onClick={handlesumbit}>

                                        <div className="row ">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control  " id="name " placeholder="Name"required/>
                                                    <br />
                                    
                                                </div>
                                            </div>
                                        
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control " id="mail " placeholder="Mail ID" required/><br />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group ">
                                                    <input type="tel" className="form-control " id="tel " placeholder="Contact Number" required/><br />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group ">
                                                    <textarea name="textarea" id="teaxtarea" className="form-control" placeholder="Subject" cols="30" rows="10"></textarea>
                                                </div>
                                            </div>
                                             <div className="">
                                                <div className=" ">
                                                    {/* <input type="checkbox" className="" id="checkbox " />Check the Detials<br /> */}
                                                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required/>
                                                        <label class="form-check-label" for="myCheck">I agree on blabla.</label>
                                                        <div class="valid-feedback">Valid.</div>
                                                        <div class="invalid-feedback">Check this checkbox to continue.</div>
                                                 </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group ">
                                                    <button type="submit" className="btn btn-info">summit</button>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                            `   <div className="contact-wrap w100 p-lg-5 p-4">
                                    <h3 className="mb-4">
                                        Contact Us:
                                    </h3>
                                        <div className="row  " data-aos="flip-right" data-aos-duration="2500">
                                            <div className="col-md-12">
                                                
                                                <p>
                                                <i class="fa-sharp fa-solid fa-location-arrow fa-fade fa-2xl" ></i>
                                                    6/156A,Mutharsanallur,Trichy-620101,
                                                
                                                    Tamilnadu,India.
                                                </p>
                                                <br />
                                                
                                    
                                             </div>
                                             <div className="col-md-12">
                                                
                                                <p>
                                                <i class="fa-solid fa-phone-volume fa-shake fa-2xl"></i>
                                                    :  Phone:  <a href="tel:+917092936390"> +91 792936390</a>
                                                </p>
                                                <br />
                                                
                                    
                                             </div>
                                             <div className="col-md-12">
                                                
                                                <p>
                                                <i class="fa-solid fa-truck-fast fa-bounce fa-2xl"></i>
                                                    :::: <a href="mailto:sangaralingam1512@gmail.com"> sangaralingam1512@gmail.com</a>
                                                </p>
                                                <br />
                                                
                                    
                                             </div>
                                             <div className="col-md-12">
                                                
                                                <p>
                                                <i class="fa-sharp fa-solid fa-link-slash fa-flip fa-xl"></i>
                                                    <a href="#">WWW.Ssangaralingamportfolio.com</a>
                                                </p>
                                                <br />
                                                
                                    
                                             </div>
                                             
                                        
                                        </div>
                                </div>

                            </div>

                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Contact;