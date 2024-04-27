import React from 'react'

export const footer = () => {

  const year = new Date();
  return (
    <section className="footor">
  
      <footer class=" bg-light">
          
          <div class="container  pt-4">
            
             <section class="row mb-4"> 
              {/* <div className="col-6">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-facebook-f"></i
              ></a>

            
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-twitter"></i
              ></a>

            
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-google"></i
              ></a>

            
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-instagram"></i
              ></a>

            
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-linkedin"></i
              ></a>
              
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-github"></i
              ></a>
              </div> */}
                    <div class="col-12 text-center p-3" >
                        © {year.getFullYear()} Copyright:
                        <a class="text-body" href="https://mdbootstrap.com/">Sangaralingam</a>
                    </div>
            </section> 
            
          </div>
          
          
      </footer>
    
    </section>
  )
}

export default footer;
