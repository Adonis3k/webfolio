import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div id="work-section">
      <div className= "Work-Header">WORK</div>
      <div className="workContainer">

                  <div className="card"> 
          <div className="content">        
          <a href="https://www.metaframetech.com/">    
          <header>
                <span>October 2024 to Present  
                </span>
                <span>DevOps Engineer</span>
                <h2>Metaframe Technology Solutions </h2> 
              </header>
              </a>
              <div className='points'>
                <h4>
               Managed production servers for hedge funds in the finance and technology sectors, 
               ensuring secure, high-availability infrastructure with 99.999% uptime using AWS and Azure solutions. </h4>
                <h4>Implemented AMI backups and automated snapshot policies for critical instances, ensuring robust disaster recovery and minimizing downtime risks. </h4>
                <h4> Administered storage for test instances, optimizing resource allocation to support system updates and enhance testing environment efficiency. </h4>
              </div>
          </div>
        </div> 

        {/* First Card */}

        <div className="card"> 
          <div className="content">        
          <a href="https:settlementhealth.org">    
          <header>
                <span>May 2021 - January 2025 
                </span>
                <span>IT Project Manager</span>
                <h2>Settlement Health & Medical </h2> 
              </header>
              </a>
              <div className='points'>
                <h4>
                Managed cloud-based IT infrastructure for a healthcare facility, ensuring regulatory compliance (OSHA, ADA, HIPAA), operational uptime, and business continuity using AWS services (EC2, S3, CloudWatch).</h4>
                <h4>Collaborated with MSPs and internal teams to support networking, endpoint management, server infrastructure, and cloud-integrated access control with real-time monitoring and audit logging.</h4>
                <h4>Optimized vendor management and reporting, overseeing AWS reserved instance planning, SaaS renewals, and licensing, while building KPI dashboards with AWS QuickSight and Excel automation.</h4>
              </div>
          </div>
        </div> 

        {/* Second Card */}
        <div className="card">
          <div className="content">
            <a href="https://www.youtube.com/channel/UCZBxeaYxXzCBOd4MsztPMGQ">
              <header>
                <span>April 2017 to September 2020</span>
                <span>Director of Operations</span>
                <h2>National Geographic Encounter</h2>
                </header>
                </a>
              <section>   
                <h4>Achieved $230K+ in annual savings by hiring and training in-house IT teams and implementing secure, full-system AWS cloud backups with preventive maintenance schedules. </h4>
                <h4>Promoted from Executive Management Coordinator to Director of Operations, progressing through Project Manager in recognition of exemplary performance; directly managed maintenance, security, and cleaning teams.</h4> 	
                <h4>Developed SOPs for AWS-based system monitoring and incident response, ensuring business continuity across 365-day operations.</h4>
              </section>
           
        
          </div>
           
        </div> 
            {/* Third Card  */}
        <div className="card">
          <div className="content">
          <a href="https://emerge212.com/">
              <header>
                <span>February 2015 to March 2017</span>
                <span>IT Help Desk Tech</span>
                <h2>SL Green / Emerge212</h2>
              </header>
              </a>
              <section>
                
                <h4>Provided customer support to over 200 clients across a 30,000 sq ft multilevel business complex, troubleshooting hardware, software, and network issues to ensure minimal downtime.
                </h4>
                <h4>Partnered with management and clients to address all business center service needs, including onboarding and offboarding processes, user account setup, and permissions management for 60+ companies. </h4>
               
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
