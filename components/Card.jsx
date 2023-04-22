import React from 'react'
import Image from 'next/image'

function Card() {
    return (
        <div>
            <div className="relative smartCard rounded-lg border-solid shadow-lg ring-2 border-blue-950 border-1 bg-white my-4 w-64 h-72 object-cover">
                <Image className='rounded-lg' src="/warren.jpeg" alt="arrow_up" width={256} height={200} />

                <div className='absolute m-2 z-10 left-0 top-0 text-center'>
                    <h1 className='smartCard rounded-sm bg-gray-100 w-20 text-black' >8 days left</h1>
                </div>

                <div className='absolute z-10 right-0 top-32 text-center'>
                    <h1 className='smartCard rounded-sm bg-gray-100 h-5 w-24 text-black'>Featured</h1>
                </div>

                <div className='absolute z-10 ml-1 left-0 border-blue-600 border-1 border-solid ring-2 top-28 h-7 w-7 rounded-full bg-white flex items-center justify-center'>
                    <span className='text-sm text-blue-900 font-medium' >1%</span>

                </div>

                {/* Text below */}
                <div className='mx-2 pt-3'>
                    <div className='flex flex-row justify-center'>
                        <span className='text-black text-sm font-semibold'>Construction of a big sink in the laboratory</span>
                    </div>

                    {/* Progress bar */}
                    <div className='w-full h-2 bg-blue-400 rounded-lg mt-3'>
                        <div className='h-2 rounded-l-full bg-blue-900' style={{ width: '50%' }}>
                        </div>
                    </div>
                </div>

                <div className='bg-blue-200 w-full h-10 mt-5 rounded-b-lg flex flex-row justify-between px-2'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-row justify-center'>
                            <span className='text-gray-500 text-xs font-normal'>Raised</span>
                        </div>
                        <span className='text-black text-sm font-semibold'>$43,566</span>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-row justify-center'>
                            <span className='text-gray-500 text-xs font-normal'>Goal</span>
                        </div>
                        <span className='text-black text-sm font-semibold'>$44,544</span>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-row justify-center'>
                            <span className='text-gray-500 text-xs font-normal'>Left</span>
                        </div>
                        <span className='text-black text-sm font-semibold'>$566</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card