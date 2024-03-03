import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

// const Logo = () => {
//   return (
//     <div className='Logo'>
//       <div> 
//       {/* <div className='height' style={{ height: '2.375rem', width: '2.375rem' }} > */}
//         <div className="pa1">
//           <img style={{ paddingTop: '.1rem', height: '3rem', width: '3rem' }} alt='Logo' src={brain}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Logo;




const Logo = () => {
  return (
    <div className='Logo'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: '2.375rem', width: '2.375rem' }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '.1rem', height: '3rem', width: '3rem' }} alt='Logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;