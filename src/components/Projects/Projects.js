
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
                                            <h2>Artificial Intelligence Face Recognition</h2>
                                          </header>
                                          <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                            <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='FaceIdentifier' src={FaceIdentifier}/>
                                          </section>
                                         
                                        <div className='projectCard1'>
                                        A React-based app for face detection using Clarifai API, 
                                        allowing image uploads and user profile management.</div>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="#">#Ai #nodejs #knex #Posgres #SQL </a>
                                          </div>
                                        </footer>
                                      </div>
                                       {/* Second Card */}
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
                                        Responsive user experience, React-based web app, optimized for the latest browsers. 
                                        It features essential testing libraries and React 17.0.2 for an efficient.</div>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="#">#Ai #nodejs #knex #Posgres #SQL </a>
                                          </div>
                                        </footer>
                                        
                                      </div>
                                       {/* Second Card */}
                                    </div> 
                                        {/* Third Card  */}
                                    <div className="card">
                                      <div className="content">
                                        <a href="https://www.linkedin.com/posts/adonis-madera_aws-wellarchitected-cloudmigration-activity-7040501656362344448-NvG6?utm_source=share&utm_medium=member_desktop">
                                          <header>
                                            <span>AWS</span>
                                            <h2>Dependency Monitoring Lab</h2>
                                          </header>
                                          <section>
                                                <section style={{ position: 'relative', overflow: 'hidden', height: '12rem' }}>
                                                <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='AWSLab' src={AWSLab}/>
                                          </section>    
                                                                     
                                          <div className='projectCard1'>
                                            Established Dependency Monitoring and leveraged CloudWatch Metrics and CloudWatch alarms, to ensure that events related to the external services are tracked effectively so that relevant stakeholders are aware of the status and resolution. 
                                            </div>
                                          </section>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="#">#AWS #cloudinfrastructure  </a>
                                          </div>
                                        </footer>
                                      </div>
                                       
                                    </div> 
                            
                                    </div>                    
    </div>
    
  );
};




export default Projects;

