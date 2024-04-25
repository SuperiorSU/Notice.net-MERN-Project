import React from 'react';
import { Link } from 'react-router-dom';

function TempCard(props) {
    const title = props.title;
    const batch = props.batch;
    const year = props.year;
    const content = props.content;
    const image = props.image;
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <Link to=""></Link>
      <div className="relative">
        <Link to={`${batch==="The Uniques"?"homeTeacher/edit-template-tu":"homeTeacher/edit-template-academic"}`}>
          <img
            className="w-full h-64 object-cover object-center"
            src={image ? image : "https://source.unsplash.com/random"}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </Link>
        <a href="#!">
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {title}
          </div>
        </a>
      </div>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
         {content}
        </a>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">{batch}</span>
        </span>
        <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
          </svg>
          <span className="ml-1">{year}</span>
        </span>
      </div>
    </div>
  );
}

export default TempCard;
