import React, { useEffect, useState } from 'react';
import BigTextSegment from '../../components/BigTextSegment/BigTextSegment';
import Header from '../../components/Header/Header';

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
        <BigTextSegment text={bigText} />
      </div>
    </>
  );
}
