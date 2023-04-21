import Link from 'next/link'

const CreateCampaignBanner = () => {
  return (
    <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
      <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
        How much do <br className='hidden md:block' />
        you Need?
      </h2>
      <p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg'>
        If you are not sure about your goal, we recommend you to set $500. You
        will be able to change it before being supported.
      </p>
    </div>
  )
}

export default CreateCampaignBanner
