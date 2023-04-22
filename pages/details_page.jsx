import React from 'react'
import Image from 'next/image'
import Card from '@/components/Card'
import Banner_filter from '@/components/Banner_filter'
function details_page() {
    return (
        <>
            <div className="bg-white px-3 h-screen flex flex-row">




                {/* First Item column in the big row */}
                <div className='ml-8 w-screen'>
                    <Banner_filter />

                    <Card />

                </div>

            </div >

        </>
    )
}

export default details_page