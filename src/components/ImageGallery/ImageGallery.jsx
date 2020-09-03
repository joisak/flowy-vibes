import React from 'react';
import './ImageGallery.scss';

const ImageGallery = () => {
  return (
    // <div className='image-gallery container'>
    //   <div>
    //     <img
    //       src='https://image.freepik.com/free-photo/red-grape-bunches-hanging-from-vine-sun-light_1401-396.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />
    //     <img
    //       src='https://image.freepik.com/free-photo/top-achievement-standing-happiness-mountain_1150-1219.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />
    //   </div>
    //   <div>
    //     <img
    //       src='https://image.freepik.com/free-photo/close-up-fennel-flowers_1401-1490.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />

    //     <img
    //       src='https://cdn.pixabay.com/photo/2017/09/22/21/24/pop-art-2777104_1280.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />
    //   </div>
    //   <div>
    //     <img
    //       src='https://cdn.pixabay.com/photo/2018/10/12/04/43/snow-3741438_1280.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />

    //     <img
    //       src='https://cdn.pixabay.com/photo/2019/12/17/02/32/sunset-in-the-phone-4700581_1280.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />
    //   </div>
    //   <div>
    //     <img
    //       src='https://cdn.pixabay.com/photo/2019/10/13/11/38/photographer-4545866_1280.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />

    //     <img
    //       src='https://cdn.pixabay.com/photo/2018/10/09/17/57/woman-3735555_1280.jpg'
    //       alt=''
    //       className='img-fluid'
    //     />
    //   </div>
    // </div>
    <div className='image-grid'>
      <div className='image half'></div>

      <div className='image quarter'></div>
      <div className='image quarter'></div>

      <div className='image third'></div>
      <div className='image third'></div>
      <div className='image third'></div>

      <div className='image sixth'></div>
      <div className='image sixth'></div>
      <div className='image sixth'></div>
      <div className='image sixth'></div>
      <div className='image sixth'></div>
      <div className='image sixth'></div>
      <div class='long-collection'>
        <div className='long image'></div>
        <div className='children'>
          <div className='image third'></div>
          <div className='image third'></div>
          <div className='image third'></div>
          <div className='image third'></div>
        </div>
      </div>
      <div class='long-collection reverse'>
        <div className='long image'></div>
        <div className='children'>
          <div className='image third'></div>
          <div className='image third'></div>
          <div className='image third'></div>
          <div className='image third'></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
