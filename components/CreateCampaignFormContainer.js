import CreateForm from './CreateForm'

const CreateCampaignFormContainer = () => {
  return (
    <div className='w-full max-w-xl xl:px-8 xl:w-5/12 text-[#383f51]'>
      <div className='bg-white rounded shadow-2xl p-7 sm:p-10'>
        <h3 className='mb-4 text-xl font-semibold  sm:text-center sm:mb-6 sm:text-2xl'>
          {"What's Your Campaign about? "}
        </h3>
        <div className='h-80 overflow-y-auto px-4 custom-scrollbar'>
          {' '}
          <CreateForm />
        </div>
      </div>
    </div>
  )
}

export default CreateCampaignFormContainer
