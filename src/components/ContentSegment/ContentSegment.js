import React, { useEffect, useRef, useState } from 'react';
import './ContentSegment.scss';

const ConentSegment = (props) => {
  const bigTextSegment = useRef(0);
  const [opacityValue, setOpacityValue] = useState(0);
  const [topPosition, setTopPosition] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', touchingRoof, {});

    return () => {
      window.removeEventListener('scroll', touchingRoof);
    };
  }, []);

  const touchingRoof = () => {
    if (bigTextSegment.current.getBoundingClientRect().top < 800) {
      console.log('down under....');
      setOpacityValue(
        bigTextSegment.current.getBoundingClientRect().top / 5 / 100
      );
    } else {
      setOpacityValue(0);
    }

    if (bigTextSegment.current.getBoundingClientRect().top / 5 / 100 > 0) {
      setTopPosition(true);
    } else {
      console.log('blomman');
      setTopPosition(false);
    }
  };

  return (
    <div
      ref={bigTextSegment}
      className='big-segment'
      style={{
        opacity: !topPosition ? `calc( -0.001 - ` + opacityValue + `)` : '0',
        backgroundImage: props.image ? `url(` + props.image + `)` : 'none',
      }}
    >
      {props.text && (
        <h2
          className='big-text'
          style={{
            opacity: `calc( -0.01 - ` + opacityValue + `)`,
          }}
        >
          {props.text}
        </h2>
      )}
      {topPosition && <p>Snopp</p>}
    </div>
  );
};

export default ConentSegment;
