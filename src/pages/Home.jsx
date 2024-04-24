import React from 'react'
import BrowseTemplates from '../components/home/BrowseTemplates'


const Home = () => {
  return (
    <div>
        <h1 className='text-2xl lg:text-4xl md:text-4xl sm:text-3xl font-semibold font-serif px-4 text-gray-500 py-3'>Browse Notice Templates</h1>
        <BrowseTemplates/>

    </div>
  )
}

export default Home