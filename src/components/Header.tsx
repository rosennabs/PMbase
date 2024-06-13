'use client';
 
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { useFormContext } from '../contexts/FormContext';



export default function Header() {

  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const {
    baseButtonClassName,
    activeButtonClassName,
    activeNavClassName,
    activeNav,
    setActiveNav,
    activeButton,
    setActiveButton } = useFormContext();

  

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
  }

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const handleLogout = (button: string) => {
    setActiveButton(button);
    logout();
    router.push('/login');
    setActiveButton(baseButtonClassName);
  }

  return (
   
    <header className="z-10 flex items-center justify-between text-m lg:flex pb-4 mx-32">

      
              <Link href='/'>
          <div onClick={() => setActiveNav(null)} className="text-3xl mr-16 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent montserrat-semibold">
                  HECbase
                </div>
      </Link>
      
      <div className="flex items-center w-90">
        <Link href='/about'>
          <div onClick={() => handleNavClick('about')} className={activeNav === 'about' ? activeNavClassName : 'mr-8'}>
            About
          </div>
        </Link>

        <Link href='/dashboard'>
          <div onClick={() => handleNavClick('dashboard')} className={activeNav === 'dashboard' ? activeNavClassName : 'mr-8'}>
            Dashboard
          </div>
        </Link>
        
        <Link href='/reporting'>
          <div onClick={() => handleNavClick('reporting')} className={activeNav === 'reporting' ? activeNavClassName : 'mr-8'}>
            Reporting
          </div>
        </Link>

        <Link href='/resources'>
          <div onClick={() => handleNavClick('resources')} className={activeNav === 'resources' ? activeNavClassName : 'mr-8'}>
            Resources
          </div>
        </Link>
        

              {/* <Link href='/program'>
          <div onClick={() => handleNavClick('program')} className={activeNav === 'program' ? activeNavClassName : 'mr-8'}>
                  Program
                </div>
              </Link> */}

              {/* <Link href='/knowledge_products'>
          <div onClick={() => handleNavClick('kp')} className={activeNav === 'kp' ? activeNavClassName : 'mr-8'}>
                  Knowledge Products
                </div>
              </Link> */}

              {/* <Link href='/relationships'>
          <div onClick={() => handleNavClick('relationship')} className={activeNav === 'relationship' ? activeNavClassName : 'mr-8'}>
                  Relationship building
                </div>
              </Link> */}
      </div>
      
      <div className=''>
        <Link href='/feedback'>
          <button onClick={() => handleButtonClick('feedback')} className={activeButton === 'feedback' ? activeButtonClassName : baseButtonClassName}>
            Leave Feedback
          </button>
        </Link>
      </div>
      

      {/* <div className="flex items-center space-x-8">
        
        {isAuthenticated ? (
          <>
            <p className="text-m text-black">Hello, {user.first_name}</p>

            <button onClick={() => handleLogout('logout')} className={activeButton === 'logout' ? activeButtonClassName : baseButtonClassName}>
                Logout
              </button>
            
          </>
        ) : (
          <>
              <Link href='/login'>
                <button onClick={() => handleButtonClick('login')} className={activeButton === 'login' ? activeButtonClassName : baseButtonClassName}>
                  Login
                </button>
              </Link>

              <Link href='/registration'>
              <button onClick={() => handleButtonClick('signup')} className={activeButton === 'signup' ? activeButtonClassName : baseButtonClassName}>
                  Sign up
                </button>
            </Link>
            </>
        )}
            </div> */}


          </header>

  );
}
