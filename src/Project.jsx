import image6 from "./images/Anjali-image.png";
import image7 from "./images/cinema.png";
import image8 from "./images/Hosptial.png";
import image9 from "./images/Pandya.png";

function Project() {
  return (
    <section className="projectsection" id="Project">
      <div className="container-fluid bg-color1 project py-5">
        <h1 className="d-flex justify-content-center text-info mb-5">
          <u>
            <strong>Projects</strong>
          </u>
        </h1>

        <div
          className="row justify-content-center"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          {/* Project 1 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={image6}
                className="card-img-top"
                alt="Anjali Associates Website"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Anjali Associates</h5>
                <p className="card-text">
                  Loan finance company website offering all types of loans.
                </p>
                <a
                  href="https://www.anjaliassociates.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={image7}
                className="card-img-top"
                alt="Cinema Diary Hub"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Cinema Diary Hub</h5>
                <p className="card-text">
                  Cinema-based website for movie lovers to share and explore.
                </p>
                <a
                  href="https://cinema-diary-hub.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={image8}
                className="card-img-top"
                alt="Pandyanadu Siddha Varma Hospital"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Siddha & Varma Hospital</h5>
                <p className="card-text">
                  Siddha and Varma traditional hospital website.
                </p>
                <a
                  href="https://pandyanadusiddhavarmahospital.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={image9}
                className="card-img-top"
                alt="Pandya Dynasty Website"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Pandya Dynasty</h5>
                <p className="card-text">
                  Informational website about the historic Pandya Kingdom.
                </p>
                <a
                  href="https://www.pandyadynasty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
