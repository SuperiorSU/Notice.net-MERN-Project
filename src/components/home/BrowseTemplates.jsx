import React from 'react'
import TempCard from './TempCard'
import tu from '../../assets/bgtu.jpg'
import acad from '../../assets/academic.jpg'
const BrowseTemplates = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-y-3 gap-x-3'>
            <TempCard title='Alerts' batch="The Uniques" image={tu} year="2024" content="The template is for the uniques batch" />
            <TempCard title='Notice' batch="SVIET Academics" image={acad} year="2024" content="The template is for the academic year notice and guidelines" />
            
        </div>
        
    </div>
  )
}

export default BrowseTemplates