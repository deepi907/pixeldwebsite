import React, { useState } from 'react';
import './index.css';
import lightSwitchIcon from './assets/button.jpg';
import foldIcon from './assets/fold.png';
import projectGif from './assets/pixel-art-computer.gif';
import weatherGif from './assets/weather.gif';
import marvelGif from './assets/marvel1.gif';
import profileImage from './assets/profile.jpg'; 
import Draggable from 'react-draggable';
import skillImage from './assets/skill.gif'
import contactImage from './assets/contact.jpg'
import sunnyGif from './assets/sunny.gif';
import backgroundSound from './assets/ninja_hattori_flute.mp3';
import NavSound from './assets/tuturu_1_mduEcc3.mp3';
import { useEffect, useRef } from 'react';
import Sunflower from './assets/flowers.gif';
import DGIF from './assets/3D.png';
import welcomeGif from './assets/welcome.gif';



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeBox, setActiveBox] = useState("aisha");  // default is Aisha box

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
     playNavSound();
    setActiveBox("project");
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
     playNavSound();
    setActiveBox("aisha");
  };

   const handleAboutMeClick = (e) => {
    e.preventDefault();
     playNavSound();
    setActiveBox("aboutme");
  };
 const handleSkillsClick = (e) => {
    e.preventDefault();
     playNavSound();
    setActiveBox("skills");
  };

  const eventLogger = (e, data) => {
    console.log("Dragging:", e, data);
  };


const handleContactClick = (e) => {
  e.preventDefault();
    playNavSound();
  setActiveBox("contact");
};
const audioRef = useRef(null);

const playNavSound = () => {
  const audio = new Audio(NavSound);
  audio.play();
};


  useEffect(() => {
    if (isDarkMode) {
      audioRef.current?.play().catch((e) => {
        console.log('Audio play blocked or failed:', e);
      });
    } else {
      audioRef.current?.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isDarkMode]);




  
  return (
    <div className={`background ${isDarkMode ? 'dark' : 'light'}`}>
      
      <audio ref={audioRef} src={backgroundSound} preload="auto" loop />
      <header>
        <nav className="pixel-navbar">
          <ul>
        

            <li  className="nav-item">
              <a href="#home" onClick={handleHomeClick}>
                Home
              </a>
            </li>
             
              
            <li  className="nav-item">
              <a href="#project" onClick={handleProjectClick}>
                <img src={foldIcon} alt="Project" className="nav-icon" /> Project
              </a>
            </li>
              
              
              
            <li  className="nav-item"><a href="#aboutme" onClick={handleAboutMeClick}>
              About Me</a>
              </li>
            
            
            <li  className="nav-item"><a href="#skills" onClick={handleSkillsClick}>
              Skills</a></li>
            
           
            <li  className="nav-item"><a href="#contact" onClick={handleContactClick}>
              Contact</a></li>
          
          </ul>
        </nav>
        
        <h1>My Simple Website</h1>
      </header>
       
       
      <main>
        {activeBox === "aisha" && (
          <div className="aisha-box">
            <h2>Welcome!</h2>
            <p>I'm a Deepika who loves making cool stuff on the web.  
Let’s dive in!</p>
   <img src={Sunflower} alt="Sunflower" className="sunflower-gif" />
            <button className="pixel-button" onClick={toggleMode}>
              <img src={lightSwitchIcon} alt="Toggle Light/Dark Mode" className="light-switch-icon" />
            </button>
          </div>
        )}
{activeBox === "project" && (
    <div className="project-container" >
<img src={projectGif} alt="Project animation" style={{ display: 'block', margin: '0 auto 1px', maxWidth: '12%' }} />

  <div className="aisha-box flex-box">
    
      <div className="section-row">
          <div className="section-wrapper">
              <a
    href="https://weatherlive8.netlify.app/" 
    target="_blank"
    rel="noopener noreferrer"
    className="clickable-box"
  >
    
        <div className="section-box"><img src={weatherGif} alt="Weather animation" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
 <span className="section-name">weather</span>
 </div>
 </a>
</div>
    <div className="section-wrapper">
      
  <a
    href="https://dmarvel-hero.netlify.app/" 
    target="_blank"
    rel="noopener noreferrer"
    className="clickable-box"
  >

        <div className="section-box"><img src={marvelGif} alt="Weather animation" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
             <span className="section-name1">Marvel slider</span>       
</div>
</a>
</div>
             <div className="section-wrapper">
        <a
    href="https://myportfoliodee.netlify.app/" 
    target="_blank"
    rel="noopener noreferrer"
    className="clickable-box"
  >
        <div className="section-box"><img src={DGIF} alt="Weather animation" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
             <span className="section-name1">3D portfolio</span>  
</div>
</a>
        </div>
        <div className="section-box">this site</div>
      
      </div>
    <div className="vertical-line"></div>   {/* Move line here, on left */}

    <div className="left-content">
      
      
      <h2>Project Box</h2>
      <h2>Welcome!</h2>
       <p></p>
        <p>Dive into the creations that reflect my journey as a developer.</p>
        <p> Built using React, CSS magic, and a touch of pixel art nostalgia.</p>
       
      <p>This is a basic React website with a background image from the assets folder.</p>
      <p>This is the project box content.</p>
   <img src={welcomeGif} alt="Welcome GIF" style={{ width: '100%', maxHeight: '1npm00px', objectFit: 'contain' }} />
    </div>
    
   </div>
  </div>
)}


 {activeBox === "aboutme" && (
          <div className="aboutme-container">
            <div className="aisha-box flex-box">
              {/* Profile Image Box */}
              <div className="section-row">
                <div className="profile-wrapper">
                  <div className="profile-box">
                    <img src={profileImage} alt="Profile" className="profile-img" />
                  </div>
                  <span className="section-name2">Deepika</span>
                </div>
              </div>
             
              <div className="left-content">
                <h2>About Me</h2>
                <p>
                  Hi! I'm a passionate front-end developer with a love for crafting delightful user experiences.
                  I enjoy working with modern web technologies and building things that make people smile.
                </p>
                
                <p>
                  Currently, I'm exploring the world of DevOps — learning tools 
                </p>
                <p>
                  When I’m not coding, you’ll find me:

🎨 Painting and experimenting with colors on canvas
                </p>
              </div>
            </div>
          </div>
        )}




    
 
{activeBox === "skills" && (
  <div className="skills-container">
    <div className="aisha-box flex-box">
      <div className="section-row">
        <div className="profile-wrapper">
          <div className="profile-box">
            {/* You can use any icon or image to represent skills */}
            <img src={skillImage} alt="Skills Icon" className="skill-img" />
          </div>
          <span className="section-name2">Skills</span>
        </div>
      </div>

      <div className="left-content">
        <h2>Tools</h2>
        <div className="skills-box">
          <span>VS Code</span>
          <span>Canva</span>
          <span>Git</span>
          <span>Vite</span>
          
          
        </div>

        <h2>Development</h2>
        <div className="skills-box">
       
           <span>Java</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>Tailwind CSS</span>
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>SQL</span>
        </div>
      </div>
    </div>
  </div>
)}

             
              
              {activeBox === "contact" && (
  <div className="contact-container">
    <div className="aisha-box flex-box">
      <div className="section-row">
        <div className="contact-wrapper">
          <div className="contact-box">
            {/* Reuse profile image or use a different one for contact */}
            <img src={contactImage} alt="Contact Icon" className="contact-img" />
          </div>
          <span className="section-name2">Contact</span>
        </div>
      </div>

      <div className="left-content">
        <h2>Get in Touch</h2>
        <p>You can reach out to me via the following channels:</p>
        <div className="contact-details">
          <p><strong>Email:</strong> deepikamathur1032@rediffmail.com</p>
          <p><strong>Twitter:</strong> <a href="https://x.com/Deepika409" target="_blank">x.com/Deepika409</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/deepika-m-08b8a41a8/" target="_blank">linkedin.com/in/deepika-m-08b8a41a8/</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/deepi907" target="_blank">github.com/deepi907</a></p>
        </div>
      </div>
    </div>
  </div>
)}

              
            
          
        {!isDarkMode && (
  <div className="background-overlay">
    <img src={sunnyGif} alt="Sunny Overlay" className="sunny-overlay" />
  </div>
)}


      </main>

      <footer>
        <p>&copy; 2025 My Simple Website DEEPIKA</p>
      </footer>
    </div>
  );
};

export default App;
