import React, { useEffect, useState } from 'react';
import HeroImage from '../HeroImage/HeroImage';

const HeroImages = (props) => {
  const [heroImages, setHeroImages] = useState([]);

  const fetchHeroImages = () => {
    fetch('http://localhost:4000/heroImages')
      .then((data) => data.json())
      .then((data) => {
        setHeroImages(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchHeroImages();
  }, []);

  return (
    <div>
      {props.data &&
        heroImages.map((item) => {
          return (
            <HeroImage
              topPosition={props.topPosition}
              url={item.url}
              top={item.top}
              delay={item.delay}
            />
          );
        })}
    </div>
  );
};

export default HeroImages;
