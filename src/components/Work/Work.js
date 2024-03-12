import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div id="work-section">
      <div className= "Work-Header">WORK</div>
      <div className="workContainer">
                                    
        {/* First Card */}

        <div className="card"> 
          <div className="content">        
          <a href="https:settlementhealth.org">    
          <header>
                <span>Current Employer 
                </span>
                <span>Project Manager</span>
                <h2>Settlement Health & Medical </h2> 
              </header>
              </a>
              <div className='points'>
                <h4>
                  Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity. 
                </h4>
                <h4>Continuously improved upon building infrastructure by incorporating modernization processes and preventive maintenance. 
                </h4>
                
              </div>
          </div>
           {/* Second Card */}
        </div> 
        <div className="card">
          <div className="content">
            <a href="https://www.youtube.com/channel/UCZBxeaYxXzCBOd4MsztPMGQ">
              <header>
                <span>April 2017 – September 2020</span>
                <span>Director of Operations</span>
                <h2>National Geographic Encounter</h2>
                </header>
                </a>
              <section>
              
               
                <h4> Reduced costs by $230,000 annually through the hiring, training, and on-going development of in-house staff for, Maintenance, Cleaning, and Security functions.</h4> 	
                <h4> Supervised the maintenance staff and vendors that support employees and guests. Implemented procedures and policies.</h4> 	

              </section>
           
        
          </div>
           
        </div> 
            {/* Third Card  */}
        <div className="card">
          <div className="content">
          <a href="https://emerge212.com/">
              <header>
                <span>February 2015 to March 2017</span>
                <span>Facility Manager</span>
                <h2>SL Green / Emerge212</h2>
              </header>
              </a>
              <section>
                
                <h4>Managed FOH operations across a multilevel business complex, totaling 30,000 sq ft with over 200 clients.
                </h4>
                <h4>
                Collaborated directly with building facilities management regarding property maintenance and staffing to ensure
the business center ran optimally and created a highly hospitable environment for guests.
                </h4>
               
              </section>
            
          </div>
           {/*Fourth Card  */}
           
        </div> 

        <div className="card"> 
          <div className="content">
          <a href="https://www.theshopsatcolumbuscircle.com/">
              <header>
                <span>May 2014 to February 2015</span>
                <span>Guest Services, Concierge</span>
                <h2>The Shops at Columbus Circle </h2>
              </header> </a>
              <section>
              <h4>
                Provided superior guest and concierge services to ensure happy and delighted customers.</h4>
                <h4>Created solutions for guests while practicing actively listening to their needs thus creating repeat business.</h4>
                <h4>
Routinely executed comprehensive nocturnal surveys of the premises, meticulously scrutinizing the property to detect and catalog any indications of damage or deterioration.</h4>

               
              </section>
           
         
          </div>
           {/* Fith Card */}
        </div> 
        <div className="card">
          <div className="content">
            <a href="https://www.facebook.com/SolDeLunaUsa">
              <header>
                <span>July 2012 to May 2014</span>
                <span>FOUNDER & OWNER</span>
                <h2>Sol De Luna USA / Gourmet Foods Company</h2>
              </header> </a>
              <section>
                <h4>
                

Coached and developed a team of sales associates for consistency in achievement of revenue goals. </h4>
<h4>Manage all operational aspects of business across the organization to ensure customer satisfaction. </h4>
<h4>Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity. </h4>
              
              </section>

          </div>
           
        </div> 
            {/* Sixth Card  */}
        <div className="card">
          <div className="content">
            <a href="https://www.t-mobile.com/">
              <header>
                <span>January 2007 to June 2012</span>
                <span>OWNER, PARTNER</span>
                <h2>T-Mobile Authorized Dealer</h2>
              </header> </a>
              <section>
                <h4>
                As the Store Owner & Operations Manager in New York, NY for T-Mobile Authorized Dealer from January 2007 to June 2012</h4> 
               <h4> Worked towards a thriving telecommunications outlet. My role encompassed the direction of sales strategies, leading to the successful creation, negotiation, and conclusion of service contracts.</h4> 
            
              </section>
           

          </div>
           {/*additioanl cards */}     
        </div> 
      </div>
    </div> // Added for clarity, this is the closing tag for id="work-section"
  );
};

export default Work;
