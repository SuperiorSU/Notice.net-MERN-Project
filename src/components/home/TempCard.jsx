import React from 'react';

function TempCard(props) {
    const title = props.title;
    const batch = props.batch;
    const year = props.year;
    const content = props.content;
    const image = props.image;
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="rounded overflow-hidden flex flex-col max-w-2xl mx-auto border">
        <div className="sm:flex justify-between items-center pt-4 px-5">
          <a href="#"
            className="sm:w-8/12 font-medium text-md hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{title}</a>
          <div className="sm:w-4/12 flex items-center sm:px-6 pb-4">
            <a href="#"><img className="w-10 h-10 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
            <div className="text-xs">
              <a href="#" className="text-gray-900 font-medium leading-none hover:text-indigo-600">{batch}</a>
              <p className="text-gray-600 text-xs">{year}</p>
            </div>
          </div>
        </div>
  
        <div className="relative">
          <a href="#">
            <img className="w-full" src={image} />
          </a>
          <a href="#!"
            className="hidden z-10 text-xs absolute bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-red-500 hover:text-white transition duration-500 ease-in-out sm:flex items-center"><span className="text-lg">|</span>&nbsp;&nbsp;<span>View</span></a>
  
          <a href="#!"
            className="hidden z-10 text-xs absolute bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-red-500 hover:text-white transition duration-500 ease-in-out sm:flex items-center"><span className="text-lg">|</span>&nbsp;&nbsp;<span>Edit Template</span></a>
        </div>
        <a href="#" className="p-5 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg height="13px" width="13px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                  c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                  c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">6 mins ago</span>
        </a>
      </div>
    </div>
  );
}

export default TempCard;
