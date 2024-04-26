import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Notices = () => {
    const [log, setLog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/v1/getNotices');
                // const { data: { students } } = response;
                // setLog(students);
                console.log(response.data.notices);
                setLog(response.data.notices);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='p-5 bg-gray-200'>
            <div className='py-4 px-4 bg-white'>
                <h1 className='text-2xl font-semibold text-gray-900'> All Notices</h1>
            </div>
            {log.map((item) => (
                <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] bg-white'>
                    <div className='flex space-x-4 '>
                        <input type="checkbox" className='w-4 h-4 mt-2' />
                        <div className='flex flex-col space-y-1'>
                            <p className='font-semibold'>{item.title}</p>
                            <span><p className='text-sm text-slate-500'>ID: {item._id}</p></span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <span><p className='text-sm text-slate-500'>{item.date}</p></span>
                        <span><p className='text-sm text-slate-500'>{item.place}</p></span>
                    </div>
                    <div className='flex space-x-4 md:w-[16rem] justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>{item.batch}</p></span>
                        </div>
                        <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit User</button>
                        <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Delete</button>
                    </div>
                </div>
            ))}
            <div className='py-5 border-2 shadow-sm rounded-md px-4 my-4 bg-white'>
                <div className='flex items-center gap-4'>
                    <div><h3 className='pb-5 text-xl font-semibold text-gray-900'>Notice: <span className='text-[#ca0019]'>The Uniques Batch</span> </h3></div>
                    <div className='h-[1px] mb-4 bg-gray-400 w-[70%]'></div>
                </div>
                
                {log.map((item) => {
                    return item.batch === 'The Uniques' && (
                        <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] '>
                        <div className='flex space-x-4 '>
                            <input type="checkbox" className='w-4 h-4 mt-2' />
                            <div className='flex flex-col space-y-1'>
                                <p className='font-semibold'>{item.title}</p>
                                <span><p className='text-sm text-slate-500'>ID: {item._id}</p></span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>{item.date}</p></span>
                            <span><p className='text-sm text-slate-500'>{item.place}</p></span>
                        </div>
                        <div className='flex space-x-4 md:w-[16rem] justify-between'>
                            <div className='flex flex-col space-y-1'>
                                <span><p className='text-sm text-slate-500'>{item.batch}</p></span>
                            </div>
                            <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit User</button>
                            <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Delete</button>
                        </div>
                    </div>
                    )
                }

                
            )}
            </div>
            <div className='py-5 border-2 shadow-sm rounded-md px-4 my-4 bg-white'>
                <div className='flex items-center gap-4'>
                    <div><h3 className='pb-5 text-xl font-semibold text-gray-900'>Notice: <span className='text-blue-400'>Academics</span> </h3></div>
                    <div className='h-[1px] mb-4 bg-gray-400 w-[77%]'></div>
                </div>
                
                {log.map((item) => {
                    return item.batch === 'academic' && (
                        <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] '>
                        <div className='flex space-x-4 '>
                            <input type="checkbox" className='w-4 h-4 mt-2' />
                            <div className='flex flex-col space-y-1'>
                                <p className='font-semibold'>{item.title}</p>
                                <span><p className='text-sm text-slate-500'>ID: {item._id}</p></span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>{item.date}</p></span>
                            <span><p className='text-sm text-slate-500'>{item.place}</p></span>
                        </div>
                        <div className='flex space-x-4 md:w-[16rem] justify-between'>
                            <div className='flex flex-col space-y-1'>
                                <span><p className='text-sm text-slate-500'>{item.batch}</p></span>
                            </div>
                            <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit User</button>
                            <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Delete</button>
                        </div>
                    </div>
                    )
                }

                
            )}
            </div>
        </div>
    );
};

export default Notices;
