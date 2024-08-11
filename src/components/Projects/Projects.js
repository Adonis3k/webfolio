
import React from 'react';
import bestsubscreenshot from './bestsubscreenshot.png';
import FaceIdentifier from './FaceIdentifier.png';
import RoboFriends from './RoboFriends.png';
import AWSLab from './AWSLab.png';
import './Projects.css';



const Projects = () => {
  return (
    <div id="Projects-section">
      <div className='projectHeader'>PROJECTS</div>
      <div className="projectsContainer">
                                    
                                    {/* First Card */}
                                    <div className="card"> 
                                      <div className="content">
                                      <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                            <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='bestsubscreenshot' src={bestsubscreenshot}/>
                                          </section>
                                      <a href="https://bestsubs.nyc/">
                                          <header>
                                            <h2>BEST Subs NYC</h2>
                                            <span>E-Commerce, Design, Build, Deploy</span>
                                          </header> 
                                          </a>
                                        <div className='projectCard1'>
<h4>Engineered a user-friendly website for BESTSubs NYC, enabling customers to explore menu offerings and engage with the brand online.</h4>
<h4>User Experience Optimization: Implemented dynamic user interface elements and responsive design to enhance the customer experience across all devices.</h4>
<h4>Real-Time Analytics: Employed real-time analytics to monitor website performance, customer behavior, and engagement trends, ensuring data-driven decision-making.</h4>
                                      </div>                                                                                                                     <div className="author">
                                     <div className="author"> <p>#ECommerce #WebDevelopment #JavaScript </p>
                                     </div>
                                    </div>
                                        
                                      </div>
                                    </div> 
                                     {/* Second Card */}
                                     <div className="card"> 
                                      <div className="content">
                                      <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                            <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='FaceIdentifier' src={FaceIdentifier}/>
                                          </section>
                                      <a href="https://ai-face-detection-c5c2985fed20.herokuapp.com/">
                                          <header>
                                            <h2>AI - Face Recognition</h2>
                                            <span>Face Recognition Tool </span>
                                          </header> 
                                          </a>
                                        <div className='projectCard1'>
<h4>Integrated Clarifai's API for accurate face detection and implemented logic to display bounding boxes around detected faces.</h4>
<h4>Implemented state management to track user sessions, manage user profiles, and update entry counts upon successful image submissions.</h4>
<h4>Employed project management methodologies to organize the development process, meet milestones, and ensure application functionality.</h4>
                                      </div>                                                                                                                     <div className="author">
                                     <div className="author"> <p>#AI #nodejs #knex #Posgres #SQL </p>
                                     </div>
                                    </div>
                                        
                                      </div>
                                    </div> 
                                     {/* Third Card*/}
                                    <div className="card">
                                      <div className="content">
                                      <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                                <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='AWSLab' src={AWSLab}/>
                                          </section>
                                        <a href="https://www.linkedin.com/posts/adonis-madera_aws-wellarchitected-cloudmigration-activity-7040501656362344448-NvG6?utm_source=share&utm_medium=member_desktop">
                                          <header>
                                            <h2>Dependency Monitoring Lab</h2>
                                            <span>AWS</span>
                                          </header>   
                                          </a>     
                                          <div className='projectCard1'>
                                          <h4>
  Engineered a solution for monitoring dependencies in AWS, ensuring robust tracking of cloud-based resources.
</h4>
<h4>
  Implemented automated alerts and diagnostics using AWS tools to proactively manage system dependencies.
</h4>
<h4>
  Focused on enhancing system reliability and uptime by closely monitoring interdependencies within the AWS ecosystem.
</h4> 
</div>                                      
                              
                                          <div className="author2">
                                            <p>#AWS #Cloud Infrastructure  </p>
                                          </div>
                                       
                                      </div>
                                       
                                    </div> 
                                    {/* 3rd Card */}
                                    <div className="card"> 
                                      <div className="content">
                                      <a href="https://adonis3k.github.io/robofriends/">
                                      <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                              <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='RoboFriends' src={RoboFriends}/>
                                        </section>
                                          <header>
                                          <h2>Lightning Fast Responsive Search</h2>
                                          <span>Searchable Database utilizing API's </span>
                                          </header>
                                 
                                        </a>
                                        <div className='projectCard1'>
                                        <h4>
  Integrated a searchable user interface that dynamically filters robot profiles based on user input.
</h4>
<h4>
  Implemented state management to handle user interactions and control the display of robot profiles.
</h4>
<h4>
  Utilized React.js for efficient UI rendering and leveraged API calls to fetch robot data.
</h4>

</div>
<div className="author3">
<p>#AI #nodejs #knex #Posgres #SQL </p>
</div>
                                      </div>
                                    </div>       
                                    </div>                    
    </div>
  );
};




export default Projects;

