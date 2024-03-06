
import React from 'react';
import FaceIdentifier from './FaceIdentifier.png';
import RoboFriends from './RoboFriends.png';
import AWSLab from './AWSLab.png';
import AWS2 from './AWS2.png';
import './Projects.css';



const Projects = () => {
  return (
    <div id="Projects-section">
      <div className='projectHeader'>PROJECTS</div>
      <div className="projectsContainer">
                                    
                                    {/* First Card */}
                                    <div className="card"> 
                                      <div className="content">
                                      <a href="https://ai-face-detection-c5c2985fed20.herokuapp.com/">
                                          <header>
                                            <span>Face Recognition Tool </span>
                                            <h2>ai - Face Recognition</h2>
                                          </header>
                                          <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                            <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='FaceIdentifier' src={FaceIdentifier}/>
                                          </section>
                                         
                                        <div className='projectCard1'>
<ul>Integrated Clarifai's API for accurate face detection and implemented logic to display bounding boxes around detected faces.</ul>
<ul>Implemented state management to track user sessions, manage user profiles, and update entry counts upon successful image submissions.</ul>
<ul>Employed project management methodologies to organize the development process, meet milestones, and ensure application functionality.</ul>
                                      </div>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="javascript:void(0);">#Ai #nodejs #knex #Posgres #SQL </a>
                                          </div>
                                        </footer>
                                      </div>
                                       {/* Second Card */}
                                    </div> 
                                    <div className="card">
                                      <div className="content">
                                        <a href="https://www.linkedin.com/posts/adonis-madera_aws-wellarchitected-cloudmigration-activity-7040501656362344448-NvG6?utm_source=share&utm_medium=member_desktop">
                                          <header>
                                            <span>AWS</span>
                                            <h2>Dependency Monitoring Lab</h2>
                                          </header>
                                          </a>
                                          <section>
                                                <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                                <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='AWSLab' src={AWSLab}/>
                                          </section>    
                                                                     
                                          <div className='projectCard1'>
                                          <ul>
  Engineered a solution for monitoring dependencies in AWS, ensuring robust tracking of cloud-based resources.
</ul>
<ul>
  Implemented automated alerts and diagnostics using AWS tools to proactively manage system dependencies.
</ul>
<ul>
  Focused on enhancing system reliability and uptime by closely monitoring interdependencies within the AWS ecosystem.
</ul> </div>
                                          </section>
                                      :
                                        <footer>
                                          <div className="author">
                                            <a href="javascript:void(0);">#AWS #Cloud Infrastructure  </a>
                                          </div>
                                        </footer>
                                      </div>
                                       
                                    </div> 
                                    <div className="card"> 
                                      <div className="content">
                                      <a href="https://adonis3k.github.io/robofriends/">
                                          <header>
                                            <span>Searchable Database utilizing API's </span>
                                            <h2>Lightning Fast Responsive Search</h2>
                                          </header>
                                          <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                              <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='RoboFriends' src={RoboFriends}/>
                                        </section><div className='projectCard1'>
                                        <ul>
  Integrated a searchable user interface that dynamically filters robot profiles based on user input.
</ul>
<ul>
  Implemented state management to handle user interactions and control the display of robot profiles.
</ul>
<ul>
  Utilized React.js for efficient UI rendering and leveraged API calls to fetch robot data.
</ul>

</div>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="javascript:void(0);">#Ai #nodejs #knex #Posgres #SQL </a>
                                          </div>
                                        </footer>
                                        
                                      </div>
                                       {/* Second Card */}
                                    </div>       
                                    </div>                    
    </div>
    
  );
};




export default Projects;

