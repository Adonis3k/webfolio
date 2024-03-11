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
                <span>Current Employer</span>
                <h2>Settlement Health & Medical </h2>
              </header>
              </a>
              <div className='points'>
                
                <ul>
                  Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity. 
                </ul>
                <ul>Continuously improved upon building infrastructure by incorporating modernization processes and preventive maintenance. 
                </ul>
                <ul>Project Managed the full renovation of satellite health clinic.</ul>
                
              </div>
            
            <footer>
              <div className="author">
                <a href="javascript:void(0);">Project Manager</a>
              </div>
            </footer>
          </div>
           {/* Second Card */}
        </div> 
        <div className="card">
          <div className="content">
            <a href="https://www.youtube.com/channel/UCZBxeaYxXzCBOd4MsztPMGQ">
              <header>
                <span>April 2017 – September 2020</span>
                <h2>National Geographic Encounter</h2>
                </header>
                </a>
              <section>
              
                <ul>Optimized operations to improve guest experience.</ul> 	
                <ul> Reduced costs by $230,000 annually through the hiring, training, and on-going development of in-house staff for, Maintenance, Cleaning, and Security functions.</ul> 	
                <ul> Supervised the maintenance staff and vendors that support employees and guests. Implemented procedures and policies.</ul> 	

              </section>
           
            <footer>
              <div className="author">
                <a href="javascript:void(0);">Director of Operations</a>
              </div>
            </footer>
          </div>
           
        </div> 
            {/* Third Card  */}
        <div className="card">
          <div className="content">
          <a href="https://emerge212.com/">
              <header>
                <span>February 2015 to March 2017</span>
                <h2>SL Green / Emerge212</h2>
              </header>
              </a>
              <section>
                
                <ul>Managed FOH operations across a multilevel business complex, totaling 30,000 sq ft with over 200 clients.
                </ul>
                <ul>
                Collaborated directly with building facilities management regarding property maintenance and staffing to ensure
the business center ran optimally and created a highly hospitable environment for guests.
                </ul>
               
              </section>
            
            <footer>
              <div className="author">
                <a href="javascript:void(0);">Facility Manager</a>
              </div>
            </footer>
          </div>
           {/*Fourth Card  */}
           
        </div> 

        <div className="card"> 
          <div className="content">
          <a href="https://www.theshopsatcolumbuscircle.com/">
              <header>
                <span>May 2014 to February 2015</span>
                <h2>The Shops at Columbus Circle </h2>
              </header> </a>
              <section>
              <ul>
                Provided superior guest and concierge services to ensure happy and delighted customers.</ul>
                <ul>Created solutions for guests while practicing actively listening to their needs thus creating repeat business.</ul>
                <ul>
Routinely executed comprehensive nocturnal surveys of the premises, meticulously scrutinizing the property to detect and catalog any indications of damage or deterioration.</ul>

               
              </section>
           
            <footer>
              <div className="author">
                <a href="javascript:void(0);">Concierge </a>
              </div>
            </footer>
          </div>
           {/* Fith Card */}
        </div> 
        <div className="card">
          <div className="content">
            <a href="https://www.facebook.com/SolDeLunaUsa">
              <header>
                <span>July 2012 to May 2014</span>
                <h2>Sol De Luna USA / Gourmet Foods Company</h2>
              </header> </a>
              <section>
                <ul>
                

Coached and developed a team of sales associates for consistency in achievement of revenue goals. </ul>
<ul>Manage all operational aspects of business across the organization to ensure customer satisfaction. </ul>
<ul>Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity. </ul>
              
              </section>
            
            <footer>
              <div className="author">
                <a href="javascript:void(0);">FOUNDER & OWNER</a>
              </div>
            </footer>
          </div>
           
        </div> 
            {/* Sixth Card  */}
        <div className="card">
          <div className="content">
            <a href="https://www.t-mobile.com/">
              <header>
                <span>January 2007 to June 2012</span>
                <h2>T-Mobile Authorized Dealer</h2>
              </header> </a>
              <section>
                <ul>
                As the Store Owner & Operations Manager in New York, NY for T-Mobile Authorized Dealer from January 2007 to June 2012</ul> 
               <ul> I pioneered the establishment of a thriving telecommunications outlet. My role encompassed the orchestration of sales strategies, leading to the successful creation, negotiation, and conclusion of service contracts.</ul> 
               <ul>This consistently drove robust bottom-line results. </ul>
              </section>
            
            <footer>
              <div className="author">
                <a href="javascript:void(0);">Managing Partner</a>
              </div>
            </footer>
          </div>
           {/*additioanl cards */}     
        </div> 
      </div>
    </div> // Added for clarity, this is the closing tag for id="work-section"
  );
};

export default Work;
