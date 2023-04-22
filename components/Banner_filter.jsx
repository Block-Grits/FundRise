import React from 'react'
import Image from 'next/image'

function Banner_filter() {
    return (
        <div>
            <div className="flex flex-row justify-between mt-10">
                {/* Text and count */}
                <div className="flex flex-row">
                    <div className="text-black font-bold text-2xl">Your Campaigns</div>
                    <div className="px-1.5 mx-3 text-xm text-white rounded-full py-1 bg-black">
                        04
                    </div>
                </div>

                {/* Button */}
                <div>
                    <button className="p-1 px-3 mr-8 text-white bg-blue-500 baseline rounded">
                        New Campaign
                    </button>
                </div>
            </div>

            {/* Row of Campaign, goal reached goal unreached*/}
            <div className="flex flex-row">

                <div className="flex flex-row smallCard pt-1 mt-10 w-3/4 justify-evenly bg-whiteBrown h-10 text-center font-bold">
                    {/* First icon  and text in row */}
                    <div className="flex flex-row justify-center align-middle">
                        <Image className='ml-4 mr-2 py-1.5' src="/flag_icon.png" alt="arrow_up" width={13} height={15} />
                        <h1>All Campaigns</h1>
                    </div>

                    {/* Second icon  and text in row */}
                    <div className="flex flex-row justify-center align-middle py-1">
                        <Image className='mx-3 py-1.5' src="/arrow_up_icon.png" alt="arrow_up" width={13} height={15} />
                        <h1>Goal reached</h1>
                    </div>

                    {/* 3rd icon  and text in row */}
                    <div className="flex flex-row justify-center align-middle py-1">
                        <Image className='mx-3 py-1.5' src="/arrow_up_icon.png" alt="arrow_up" width={13} height={15} />
                        <h1>Goal unreached</h1>
                    </div>

                    {/* 4rd icon  and text in row */}
                    <div className="flex flex-row justify-center align-middle py-1">
                        <Image className='mx-3 py-1.5' src="/close_icon.png" alt="arrow_up" width={13} height={15} />
                        <h1>Closed</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner_filter