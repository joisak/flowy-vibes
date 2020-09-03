import React, { useEffect, useState } from 'react';
import ContentSegment from '../../components/ContentSegment/ContentSegment';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

export default function WelcomePage() {
  const [bigText, setBigText] = useState('');

  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = () => {
    fetch('http://localhost:4000/bigText')
      .then((response) => response.json())
      .then((data) => {
        setBigText(data.text);
      })
      .catch((error) => {
        console.log('Error when fetching bigtext --> ', error);
      });
  };

  return (
    <>
      <Header hero />
      <div className='content'>
        <ContentSegment
          image={
            'https://cdn.pixabay.com/photo/2020/02/24/19/40/dog-4877213_1280.jpg'
          }
          text={bigText}
        />
        <ContentSegment
          image={
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
          }
          text={bigText}
        />
        <ContentSegment
          image={
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
          }
          text={bigText}
        />
        <ContentSegment
          image={
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
          }
          text={bigText}
        />
        <ImageGallery />
        <Footer />
      </div>
    </>
  );
}
