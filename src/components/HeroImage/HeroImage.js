import React from 'react';

const HeroImage = (props) => {
  return (
    <div
      className={
        'image image-numero-un animation' +
        (props.topPosition ? ' touching-top' : '')
      }
      style={{
        backgroundImage:
          `url(
        ` +
          props.url +
          `
      )`,
        top: props.topPosition ? props.top : `calc( ` + props.top + ` + 144px)`,
        animationDelay: props.delay + 's',
        position: props.topPosition ? 'fixed' : 'absolute',
      }}
    ></div>
  );
};

export default HeroImage;
