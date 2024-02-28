import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div id="work-section">
      <h1>Work</h1>
      <div className="container">
                                    
        {/* First Card */}

        <div className="card"> 
          <div className="content">
            <a href="#">
              <header>
                <span>Current Employer</span>
                <h2><a href="https:settlementhealth.org"></a>Settlement Health & Medical Servicess</h2>
              </header>
              <section>
                <p>
                <ul>
                  Led facility modernization and clinic renovation projects, ensuring compliance and enhancing longevity. 
                </ul>
                <ul>Continuously improved upon building infrastructure by incorporating modernization processes and preventive maintenance. 
                </ul>
                <ul>Project Managed the full renovation of satellite health clinic.</ul>
                </p>
              </section>
            </a>
            <footer>
              <div className="author">
                <a href="#">Project Manager</a>
              </div>
            </footer>
          </div>
           {/* Second Card */}
        </div> 
        <div className="card">
          <div className="content">
            <a href="#">
              <header>
                <span>April 2017 – September 2020</span>
                <h2>National Geographic Encounter</h2>
                </header>
              <section>
              <p>
                <ul>Optimized operations to improve guest experience.</ul> 	
                <ul> Reduced costs by $230,000 annually through the hiring, training, and on-going development of in-house staff for, Maintenance, Cleaning, and Security functions.</ul> 	
                <ul> Supervised the maintenance staff and vendors that support employees and guests. Implemented procedures and policies.</ul> 	
</p> 
              </section>
            </a>
            <footer>
              <div className="author">
                <a href="#">Director of Operations</a>
              </div>
            </footer>
          </div>
           
        </div> 
            {/* Third Card  */}
        <div className="card">
          <div className="content">
            <a href="#">
              <header>
                <span>February 2015 to March 2017</span>
                <h2><a href="https://emerge212.com/"></a>SL Green / Emerge212</h2>
              </header>
              <section>
                <p>
                <ul>Managed FOH operations across a multilevel business complex, totaling 30,000 sq ft with over 200 clients.
                </ul>
                <ul>
                Collaborated directly with building facilities management regarding property maintenance and staffing to ensure
the business center ran optimally and created a highly hospitable environment for guests.
                </ul>
                </p>
              </section>
            </a>
            <footer>
              <div className="author">
                <a href="#">Facility Manager</a>
              </div>
            </footer>
          </div>
           {/*Fourth Card  */}
           
        </div> 

        <div className="card"> 
          <div className="content">
            <a href="#">
              <header>
                <span>May 2014 to February 2015</span>
                <h2><a href="https:settlementhealth.org"></a>The Shops at Columbus Circle </h2>
              </header>
              <section>
                <p>
                Provided superior guest and concierge services to ensure happy and delighted customers.
                Created solutions for guests while practicing actively listening to their needs thus creating repeat business.
                Surveyed the property on a nightly basis to examine property for damage.

                </p>
              </section>
            </a>
            <footer>
              <div className="author">
                <a href="#">Concierge / Hospitality Ambassador</a>
              </div>
            </footer>
          </div>
           {/* Fith Card */}
        </div> 
        <div className="card">
          <div className="content">
            <a href="#">
              <header>
                <span>July 2012 to May 2014</span>
                <h2><a href="https:settlementhealth.org"></a>Sol De Luna USA / Gourmet Foods Company</h2>
              </header>
              <section>
                <p>
                
Founder & Sales Manager 
Coached and developed a team of sales associates for consistency in achievement of revenue goals.
Manage all operational aspects of business across the organization to ensure customer satisfaction.
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
                <span>January 2007 to June 2012</span>
                <h2><a href="https:settlementhealth.org"></a>T-Mobile Authorized Dealer</h2>
              </header>
              <section>
                <p>
                Store Owner & Operations Manager New York, NY – 
• Created, sold, and closed service contracts to achieve bottom-line results on a consistent basis.
                </p>
              </section>
            </a>
            <footer>
              <div className="author">
                <a href="#">Adonis Madera</a>
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
