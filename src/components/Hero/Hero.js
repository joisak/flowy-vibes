import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imageThree from '../../images/3.png';
import HeroImages from './../HeroImages/HeroImages';
import './Hero.scss';

function Hero(props) {
  const fontSize = 120;
  const companyBrand = useRef('');

  const images = [
    { url: imageThree, top: '20%', delay: '8' },
    { url: imageThree, top: '20%', delay: '1' },
    { url: imageThree, top: '30%', delay: '4' },
    { url: imageThree, top: '10%', delay: '1' },
    { url: imageThree, top: '60%', delay: '5' },
  ];

  const [touchingTop, setTouchingTop] = useState(false);
  const [topPosition, setTopPosition] = useState(35);
  const [newFontSize, setNewFontSize] = useState(120);

  const callBack = (topPosition) => {
    return topPosition;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {});
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;

    fontSize - position / 2 > 32
      ? setNewFontSize(fontSize - position / 2)
      : setNewFontSize(32);

    topPosition - position / 4 > 0.1
      ? setTopPosition(topPosition - position / 4)
      : setTopPosition(0);

    if (companyBrand.current.offsetTop === 0) {
      props.parentCallback(true);
      setTouchingTop(true);
    } else {
      props.parentCallback(false);
      setTouchingTop(false);
    }
    callBack(topPosition);
  };

  return (
    <div className='hero'>
      <div
        className='the-company-name'
        ref={companyBrand}
        style={{ fontSize: newFontSize, top: topPosition + '%' }}
      >
        <Link to=''>FLOWY-VIBES</Link>
      </div>
      <div className='image-flow'>
        <HeroImages topPosition={topPosition} data={images} />
      </div>
    </div>
  );
}
export default Hero;
