import React, { Suspense, lazy, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Nav from './component/Nav';
import PreLoader from './component/PreLoader';

// Lazy loading components
const About = lazy(() => import('./router/About'));
const Contact = lazy(() => import('./router/Contact'));
const LandingPage = lazy(() => import('./router/LandingPage'));
const Why = lazy(() => import('./router/Why'));
const Skill = lazy(() => import('./router/Skill'));
const Blog = lazy(() => import('./router/Project/Blog'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Nav />
          <Suspense
            fallback={
              <div className='w-screen h-screen flex justify-center items-center'>
                <Skeleton height={100} width={100} />
              </div>
            }
          >
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

            {/* Always render Blog component */}
            <div id="project">
              <Blog />
            </div>

            <div id="contact">
              <Contact />
            </div>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
