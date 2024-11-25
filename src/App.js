import "./App.css"
import navLogo from "./imgs/navLogo.svg"
import profile from "./imgs/Profile.jpg"

let App = ()=>{
  return (
    <div className = "mainBody">
      {/* Nav Bar */}
      <nav id= "navBar" class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <div className="navName">
            <span class="navbar-brand"><img src={navLogo}/> webdev_karan</span>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="#about">About</a>
              </li>
              <li class="nav-item">
                <a href="#">Skills</a>
              </li>
              <li class="nav-item">
                <a href="#">Experience</a>
              </li>
              <li class="nav-item">
                <a href="#">Projects</a>
              </li>
              <li class="nav-item">
                <a href="#">Education</a>
              </li>
            </ul>
              <button class="btn">Github Profile</button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <div id="about" className="aboutSectionContainer">
        <div className="aboutSectionTxt">
          <h1>Hi, I am</h1>
          <h1>Karan Bansinge</h1>
          <h3>I am a <span>MERN Stack Developer</span></h3>
          <p>
            A recent graduate in Electronics Engineering with a strong foundation in the MERN stack. Proficient in full-stack development, problem-solving, and data analysis. Looking for a challenging entry-level position to utilize my skills in building scalable web applications and contribute to the growth of a dynamic team.
            </p>
            <button className="resume">Check Resume</button>
        </div>
        <div className="aboutSectionImg">
          <div className="profile"><img src={profile} /></div>
        </div>
      </div>
    </div>
  )
}

export default App