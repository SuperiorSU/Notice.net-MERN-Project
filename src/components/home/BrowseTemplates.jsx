import React from 'react'
import TempCard from './TempCard'
import tu from '../../assets/bgtu.jpg'
const BrowseTemplates = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-y-3 gap-x-3'>
            <TempCard title='Alerts' batch="The Uniques" image={tu} year="2024" content="The template is for the uniques batch" />
            {/* <TempCard title='Alerts' batch="The Uniques" image="https://images.template.net/313383/Waiver-Of-Notice-Template-edit-online.jpg" year="2024" content="The template is for the uniques batch" /> */}
        </div>
        
    </div>
  )
}

export default BrowseTemplates