import profilephoto from "./images/image5.png";

function Profile() {
  return (
    <section
      className="profilesection container-fluid bg-secondary py-5"
      id="Profile"
    >
      <div className="container text-center">
        <h1 className="text-info mb-5">
          <u>
            <strong>Profile</strong>
          </u>
        </h1>

        <div data-aos="zoom-out" data-aos-duration="1500">
          <img
            src={profilephoto}
            className="profilephoto rounded-circle img-thumbnail img-fluid mb-4"
            alt="Sangaralingam D"
            style={{ width: "200px", height: "200px" }}
          />
        </div>

        <h3 className="text-light mb-3">Sangaralingam D</h3>

        <p className="text-light mx-auto" style={{ maxWidth: "800px" }}>
          A full-stack developer with two years of professional experience
          specializing in web development, project management, Agile
          methodology, and quality assurance testing. Adept at coordinating
          effectively with development teams, clients, and non-technical
          stakeholders to execute complex web development projects.
        </p>
      </div>
    </section>
  );
}

export default Profile;
