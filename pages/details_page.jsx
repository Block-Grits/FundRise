import React from 'react'
import Image from 'next/image'

function details_page() {
    return (
        <>
            <div className="bg-white px-3 h-screen flex flex-row">
                {/* The long vertical line */}

                <div className="flex flex-col max-w-min">

                    <div className="flex flex-col smallCard mt-10 w-14 h-screen text-center font-bold justify-between">

                        {/* This div shall house 3 icons */}
                        <div className="flex flex-col">
                            {/* Home icon */}
                            <div className="flex flex-row justify-center">
                                <Image src="/home_icon.png" alt="home" width={15} height={20}
                                    className="my-5" />
                            </div>

                            {/* Flag icon */}
                            <div className="flex flex-row justify-center">
                                <Image src="/flag_icon.png" alt="flag" width={15} height={20}
                                    className="my-5" />
                            </div>

                            {/* People icon */}
                            <div className="flex flex-row justify-center">
                                <Image src="/people_icon.png" alt="people" width={15} height={20}
                                    className="my-5" />
                            </div>

                        </div>




                        {/* Music icon Which has been pushed to the end using space-between */}
                        <div className="flex flex-row justify-center">
                            <Image src="/music_icon.png" alt="music" width={15} height={20}
                                className="my-5" />
                        </div>

                    </div>
                </div>

                {/* Second Item in the big row */}
                <div className='ml-8 w-screen'>
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
                                <button className="p-1 px-3 text-white bg-blue-500 baseline rounded">
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


                    <div>
                        <div className="smartCard w-56 h-56 object-cover">
                            <Image className='mx-3 py-1.5' src="/facebook_image.jpg" alt="arrow_up" width={200} height={200} />
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default details_page