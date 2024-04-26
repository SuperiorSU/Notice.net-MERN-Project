import React from 'react';
import vid from '../assets/NOTICE.net.mp4';

const TeacherHero = () => {
  return (
    <div>
      {/* Video type hero section */}
      <video
        autoPlay
        loop
        muted
        className="z-10 w-full h-[660px] object-cover object-center"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TeacherHero;
