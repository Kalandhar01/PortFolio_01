import React, { useState, useEffect, Suspense, lazy } from 'react';
import Nav from './component/Nav';
import PreLoader from './component/PreLoader';

// Lazy loading components
const About = lazy(() => import('./router/About'));
const Blog = lazy(() => import('./router/Blog'));
const Contact = lazy(() => import('./router/Contact'));
const LandingPage = lazy(() => import('./router/LandingPage'));
const Why = lazy(() => import('./router/Why'));
const Skill = lazy(() => import('./router/Skill'));

const App = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading ? (
       
        <PreLoader />
      ) : (
        <>
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>
            <div id="landing-page">
              <LandingPage />
            </div>

            <div id="about">
              <About />
            </div>

            <div id="why">
              <Why />
            </div>

            <div id="skills">
              <Skill />
            </div>

            <div id="contact">
              <Contact />
            </div>

            <div id="blog">
              <Blog />
            </div>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
