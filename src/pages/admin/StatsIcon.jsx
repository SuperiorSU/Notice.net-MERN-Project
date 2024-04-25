import React from 'react'

const StatsIcon = (props) => {
    const icon = props.icon;
    const icon2 = props.icon2;
    const mainTxt = props.mainTxt;
    const subTxt = props.subTxt;
  return (
    <div>
        <div className='flex '>
            <div className=''>
            <div className='flex items-center px-1 gap-2'>
                <div>
                    {icon}
                </div>
                <div>
                <h2 className='text-xl font-medium text-black/65'>{mainTxt}</h2>
                <p className='text-black/75 text-[12px]'>{subTxt}</p>
                <p className='text-red-500 text-[12px] px-[3px]'>{icon2} 100%</p>
                </div>
            </div>
            </div>
        </div>
        <div className='flex'>
    
        </div>
    </div>
  )
}

export default StatsIcon