import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

function Hero(props) {
  const fontSize = 120;
  const companyBrand = useRef('');

  const [touchingTop, setTouchingTop] = useState(false);
  const [topPosition, setTopPosition] = useState(35);
  const [newFontSize, setNewFontSize] = useState(120);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

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
        <div
          className={
            'image image-numero-un animation' +
            (touchingTop ? ' touching-top' : '')
          }
          style={{
            backgroundImage: `url(
              'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/130238819/original/d4096d4950eba421600f21c6c753c19375222eb6/draw-you-a-landscape-image-with-ms-paint.png'
            )`,
            top: topPosition ? '500px' : '644px',
            animationDelay: '2s',
            position: topPosition ? 'fixed' : 'absolute',
          }}
        ></div>
      </div>
    </div>
  );
}
export default Hero;
