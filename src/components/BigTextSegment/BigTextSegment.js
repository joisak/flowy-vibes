import React, { useEffect, useRef, useState } from 'react';
import './BigTextSegment.scss';

const BigTextSegment = (props) => {
  const bigTextSegment = useRef(0);
  const [opacityValue, setOpacityValue] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', touchingRoof, {});
    return () => {
      window.removeEventListener('scroll', touchingRoof);
    };
  }, []);

  const touchingRoof = () => {
    console.log(
      'big text ---> ',
      bigTextSegment.current.getBoundingClientRect().top
    );
    if (bigTextSegment.current.getBoundingClientRect().top < 650) {
      console.log('down under....');
      setOpacityValue(
        bigTextSegment.current.getBoundingClientRect().top / 6 / 100
      );
    } else {
      setOpacityValue(0);
    }

    console.log('opacityValue ----> ', opacityValue);
  };

  return (
    <div ref={bigTextSegment} className='big-text-segment'>
      <h2
        className='big-text'
        style={{
          opacity: `calc( 1 - ` + opacityValue + `)`,
          position: 'relative',
        }}
      >
        {props.text}
      </h2>
    </div>
  );
};

export default BigTextSegment;
