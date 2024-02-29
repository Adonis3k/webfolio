
import React from 'react';
import FaceIdentifier from './FaceIdentifier.png';
import RoboFriends from './RoboFriends.png';
import AWSLab from './AWSLab.png';
import AWS2 from './AWS2.png';
import './Projects.css';



const Projects = () => {
  return (
    <div id="Projects-section">
      <h1>Projects </h1>
      <div className="container">
                                    
                                    {/* First Card */}
                            
                                    <div className="card"> 
                                      <div className="content">
                                        <a href="#">
                                          <header>
                                            <span>Face Recognition Tool </span>
                                            <h2><a href="https://ai-face-detection-c5c2985fed20.herokuapp.com/"></a>Artificial Intelligence Face Recognition</h2>
                                          </header>
                                          <section style={{ position: 'relative', overflow: 'hidden', height: 'auto' }}>
                                            <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='FaceIdentifier' src={FaceIdentifier}/>
                                          </section>
                                        <ul></ul>
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
                                        <a href="#">
                                          <header>
                                            <span>Searchable Database utilizing API's </span>
                                            <h2><a href="https://ai-face-detection-c5c2985fed20.herokuapp.com/"></a>Projects</h2>
                                          </header>
                                          <section style={{ position: 'relative', overflow: 'hidden', height: '30rem' }}>
                                              <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='RoboFriends' src={RoboFriends}/>
                                        </section>
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
                                        <a href="#">
                                          <header>
                                            <span>AWS</span>
                                            <h2><a href="https://www.theshopsatcolumbuscircle.com/"></a>Dependency Monitoring Lab</h2>
                                          </header>
                                          <section>
                                                <section style={{ position: 'relative', overflow: 'hidden', height: '30rem' }}>
                                                <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='AWSLab' src={AWSLab}/>
                                          </section>                               
                                            <p>
                                            Established Dependency Monitoring and leveraged CloudWatch Metrics and CloudWatch alarms, to ensure that events related to the external services are tracked effectively so that relevant stakeholders are aware of the status and resolution. 
                                            </p>
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

