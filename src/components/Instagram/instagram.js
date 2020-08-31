import React, { useEffect, useState } from 'react';
import './instagram.scss';

function InstagramYeah() {
  const [dataObj, setDataObj] = useState([]);

  useEffect(() => {
    getInstagramData();
  }, []);

  function getInstagramData() {
    const fields = 'id,media_url',
      access_token =
        'IGQVJXdFNxMVh1TW5kZAWNUZATJVcmJXZA2R5YlptaHc3N0d6Mm1IdFlkZADEtSklSbmgtcjB3MFI0Rk1KLURxWFd2QVhKRllTUm01SFdSdnNfamQ5a09rZAkMtZA3dMaTFXb3NvY08wenRn';

    fetch(
      'https://graph.instagram.com/me/media?fields=' +
        fields +
        '&access_token=' +
        access_token
    )
      .then((response) => response.json())
      .then((data) => {
        setDataObj(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className='image-grid'>
      <ul>
        {dataObj &&
          dataObj.slice(0, 9).map((item, index) => {
            return (
              // <div className='image-box' key={item.id}>
              //   <img className='image' src={item.media_url} />
              // </div>
              <li key={item.id}>
                <img src={item.media_url} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default InstagramYeah;
