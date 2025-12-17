import React from "react";
import Logo from "./images/image4.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [
      "UI/UX Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "Web Designer",
    ],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <section className="contact-section py-5" id="Home">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left */}
          <div
            className="col-md-6 text-center text-md-start"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <br />
            <br />
            <br />
            
            <h1 className="mb-3">Sangaralingam D</h1>

            <h3 className="mb-3">
              I'm a <span className="text-info">{text}</span>
              <Cursor cursorStyle="|" />
            </h3>

            <h6 className="text-muted mb-4">
              Learn Every Day — Errors make a good Developer
            </h6>

            <div className="mb-4">
              <button className="btn btn-outline-secondary rounded-pill me-3">
                Let's Chat
              </button>

              <a
                href="/Sangaralingam-CV.pdf"
                download
                className="btn btn-info rounded-pill"
              >
                Download CV
              </a>
            </div>

            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a className="btn btn-outline-info" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-info" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="btn btn-outline-info" href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            className="col-md-6 text-center mt-5 mt-md-0"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img
              src={Logo}
              alt="Profile Illustration"
              className="img-fluid Header-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
