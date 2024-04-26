import profilephoto from './images/image4.png'


function profile(){
    return(

        <section className='profilesection container-fluid bg-secondary' id='Profile'>
            <div className="container-fluid bg-secondary profile">

                <div >
                <br />
                <br />
                
                <br />
                <br />
                <h1 className='d-flex justify-content-center text-info mb-3 '><u><strong>Pofile</strong></u></h1> 
                <br />
                <br />
                <br />
                <br />
                <div data-aos-duration="3500" data-aos="zoom-out">
                    <img src= {profilephoto} className="profilephoto rounded-circle img-thumbnail mx-auto d-block img-fluid" alt="Cinque Terre"/>
                    </div>
                    <br />
                    <br />
                    
                    <div className="text-light">
                    <h3 className='text-center'>Sangar D</h3>
                    </div>
                    <br />
                                    <pre className='text-center text-light'>
                                        A full-stack developer with two years of professional experience

                                        <br />specializing in web development, project management, Agile
                                            methodology, and quality assurance testing.<br/> Adept at coordinating
                                            effectively with development teams, <br />clients, and non-technical
                                            stakeholders to execute complex web development projects.
                                            
                                    </pre>
                                    <div>
                                        <br /><br /> <br />

                                    </div>

                    <br />
                    <br />
                    <br /><br />


            </div>
            </div>
        </section>
    )
}

export default profile;