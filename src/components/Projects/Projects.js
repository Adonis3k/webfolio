
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
                                          <section style={{ position: 'relative', overflow: 'hidden', height: '30rem' }}>
                                            <img style={{ paddingTop: '1rem', width: '100%', transform: 'translateY(-15%)' }} alt='FaceIdentifier' src={FaceIdentifier}/>
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
                                       {/*Fourth Card  */}
                                       
                                    </div> 
                            
                                    {/* <div className="card"> 
                                      <div className="content">
                                        <a href="#">
                                          <header>
                                            <span>Current Employer</span>
                                            <h2><a href="https:settlementhealth.org"></a>Settlement Health & Medical Servicess</h2>
                                          </header>
                                          <section>
                                            <p>
                                              Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity.
                                            </p>
                                          </section>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="#">Adonis Madera</a>
                                          </div>
                                        </footer>
                                      </div>
                                       {/* Fith Card */}
                                    </div> 
                                    <div className="card">
                                      <div className="content">
                                        <a href="#">
                                          <header>
                                            <span>Current Employer</span>
                                            <h2><a href="https:settlementhealth.org"></a>Settlement Health & Medical Servicess</h2>
                                          </header>
                                          <section>
                                            <p>
                                              Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity.
                                            </p>
                                          </section>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="#">Adonis Madera</a>
                                          </div>
                                        </footer>
                                      </div>
                                       
                                    </div> 
                                        {/* Sixth Card  */}
                                    <div className="card">
                                      <div className="content">
                                        <a href="#">
                                          <header>
                                            <span>Current Employer</span>
                                            <h2><a href="https:settlementhealth.org"></a>Settlement Health & Medical Servicess</h2>
                                          </header>
                                          <section>
                                            <p>
                                              Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity.
                                            </p>
                                          </section>
                                        </a>
                                        <footer>
                                          <div className="author">
                                            <a href="#">Adonis Madera</a>
                                          </div>
                                        </footer> */
                                      {/* </div> */}
                                      </div>
                                      </div>
      {/* <p>

I am a certified Project Management Professional (PMP®) and 
Disciplined Agile Scrum Master (DASM®) with a strong focus on 
software development and engineering. With over 5 years of 
project management experience, I excel in seamlessly coordinating 
cross-functional teams and third-party vendors, ensuring successful 
project delivery within scope and budget.

<h1>Technical Expertise:</h1>


Proficient in project management tools like Jira, Basecamp, and Asana, 
my technical skills extend to HTML, CSS, JavaScript, and Python. 
Currently pursuing AWS Cloud Practitioner Certification, 
I am committed to staying abreast of evolving technologies. 
My track record includes successfully managing the renovation of a 
satellite health clinic and orchestrating the grand opening of 
"The National Geographic Encounter: Ocean Odyssey" in Times Square. 
I bring a unique blend of project management acumen and technical proficiency 
to drive excellence in software development and engineering environments.</p> */}
    </div>
    
  );
};




export default Projects;

