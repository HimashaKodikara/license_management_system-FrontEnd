import React from 'react';

import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import image4 from '../Images/image4.png';
import backgroundImg from '../Images/background.jpg'; 

import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

 

 

const Home = () => {
  return (
    <>

     <section className='flex flex-col items-center justify-between w-full h-auto gap-4 bg-center bg-cover lg:flex-row lg:h-screen' style={{backgroundImage: `url(${backgroundImg})`}}>
     
    {/* Section with title, login, and register buttons */}
    <div className='flex flex-col items-start justify-center gap-20 px-12 py-10 py-20 lg:h-1/2 lg:px-20'>
      <h1 className='text-5xl font-bold text-slate-50'>License Key<br/> Management System</h1>
      <div className='flex items-center justify-center gap-7'>
        
      <Link to="/login" className="login-link"><button className='bg-green-500 text-black px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>Login</button></Link>
     

      </div>
    </div>
    </section>
   
    {/* Section with four images */}

    <section id='services' className='flex flex-col items-center justify-center w-full h-full bg-center bg-cover bg-slate-900'> 
  {/* Header for the Services section */}
  <div className="py-20 text-center">
    <h1 className="text-4xl font-bold text-white">Our Products and Services</h1>
  </div>
  
  {/* Content with four images */}
  <div className="flex flex-col items-center justify-center w-full px-3 py-10 lg:flex-row lg:px-20">
    {/* Image 1 */}
    <div className="flex flex-col items-center text-center lg:w-1/4">
      <img src={image1} alt="Product 1"  className="object-cover w-1/2 mx-auto h-1/2" />
      <h2 className="mt-8 mb-6 text-xl font-bold text-white">PeoplesHR Cloud</h2>
      <p className="mb-6 text-white">Cloud<br/> Powered HRIS..</p>
    </div>
    
    {/* Image 2 */}
    <div className="flex flex-col items-center text-center lg:w-1/4">
      <img src={image2} alt="Product 2"  className="object-cover w-1/2 mx-auto h-1/2" />
      <h2 className="mt-8 mb-6 text-xl font-bold text-white">PeoplesHR On-premise</h2>
      <p className="mb-6 text-white">A People Centric <br/>HR Solution...</p>
    </div>
    
    {/* Image 3 */}
    <div className="flex flex-col items-center text-center lg:w-1/4">
      <img src={image3} alt="Product 3" className="object-cover w-1/2 mx-auto h-1/2" />
      <h2 className="mt-8 mb-6 text-xl font-bold text-white">Tracking Solutions</h2>
      <p className="mb-6 text-white">Redefining <br/>Tracking & Access...</p>
    </div>
    
    {/* Image 4 */}
    <div className="flex flex-col items-center text-center lg:w-1/4">
      <img src={image4} alt="Product 4" className="object-cover w-1/2 mx-auto h-1/2" />
      <h2 className="mt-8 mb-6 text-xl font-bold text-white">HRO</h2>
      <p className="mb-6 text-white">Your Partner In <br/>HR Outsourcing...</p>

    </div>
  </div>
</section>



<Footer/>


  </>
  
  );
}

export default Home;

