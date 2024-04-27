import React from 'react'
import bg from '../assets/bg-student.jpg'
import user from '../assets/user.jpg'
const StudentHome = () => {
  return (
    <div>
        {/* <div
                className='h-[24.325rem] w-full flex items-end bg-[#e8e8e8] justify-center'
                style={{
                    background: `url(${}) no-repeat center center/cover`,
                    filter: 'brightness(70%)', // Reduce brightness for dull effect
                }}
            >
                <div className="relative top-20 text-center">
                    <img
                        src={user}
                        width={100}
                        height={100}
                        className='rounded-full border-2  border-white'
                        alt="Person"
                        style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', filter: 'brightness(100%)' }} // Adding a shadow effect
                    />
                    <p className='text-lg'>Hi, there!</p>
                </div>
            </div>

            {/* nav all notices and all */}
            {/*   */}

            {/* Conditionally render the History component based on active link */}
            {/* {activeLink === 'allNotices' && <History all="All Notices"/>}
            {activeLink === 'latestNotices' && <History all="Latest Notices"/>} */} 
    </div>
  )
}

export default StudentHome