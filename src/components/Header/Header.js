import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import './Header.scss';

export default function Header(props) {
  const [companyLogo, setCompanyLogo] = useState(false);

  const callbackFunction = (childData) => {
    console.log('childData', childData);
    setCompanyLogo(childData);
  };

  return (
    <>
      <div className={'header ' + (companyLogo ? 'logo-in-place' : '')}>
        <div className='content'>
          <Link to='about'>ABOUT</Link>
          <div className='logo'>
            {!props.hero && <Link to='/'>FLOWY-VIBES</Link>}
          </div>
          <div className='contact'>
            <Link to='contacts'>CONTACT</Link>
          </div>
        </div>
      </div>
      {props.hero && <Hero parentCallback={callbackFunction} />}
    </>
  );
}
