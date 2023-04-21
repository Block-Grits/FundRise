const CreateForm = () => {
  // string memory _title,
  // string memory _category,
  // string memory _location,
  // string memory _description,
  // string memory _image,
  // uint256 _goal, = how much
  //
  // uint256 _endTime,

  const newPlaceholder =
    'Answer the 6 essential questions to let everybody know about you and your project story:\n\n\nWHO: Introduce yourself or the person you want to help\n\n\nWHERE: Explain where do you live\n\n\nWHAT: Explain the problem you want to solve with your project\n\n\nWHY: Explain why do you need that amount\n\n\nWHEN: When do you need the funds?\n\n\nHOW: Describe how are you going to use the collected funds'

  return (
    <div className=''>
      <form>
        <div class='grid gap-6 mb-6 sm:grid-cols-2'>
          <div>
            <label
              for='How_much'
              class='block mb-2 text-sm font-medium text-[#383f51]'
            >
              How much?
            </label>
            <input
              type='number'
              id='How_much'
              class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5'
              placeholder='$500'
              required
            />
          </div>

          <div>
            <label
              for='deadline'
              class='block mb-2 text-sm font-medium text-[#383f51]'
            >
              Deadline
            </label>
            <input
              type='date'
              id='deadline'
              class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5'
              required
            />
          </div>
          <div>
            <label
              for='location'
              class='block mb-2 text-sm font-medium text-[#383f51]'
            >
              Location
            </label>
            <select
              id='countries'
              class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5'
            >
              <option selected>{'Your Location'}</option>
              <option value='US'>Canada</option>
              <option value='CA'>United Kingdom</option>
              <option value='FR'>China</option>
            </select>
          </div>
          <div>
            <label
              for='phone'
              class='block mb-2 text-sm font-medium text-[#383f51]'
            >
              Phone number
            </label>
            <input
              type='tel'
              id='phone'
              class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5'
              placeholder='123-45-678'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              required
            />
          </div>
        </div>
        <div class='mb-6'>
          <label
            for='title'
            class='block mb-2 text-sm font-medium text-[#383f51]'
          >
            Title
          </label>
          <input
            type='text'
            id='title'
            class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5 h-auto'
            placeholder='I want to Buy my dream house'
            required
          />
        </div>
        <div class='mb-6'>
          <label
            for='description'
            class='block mb-2 text-sm font-medium text-[#383f51]'
          >
            Description
          </label>
          <input
            type='text'
            id='description'
            class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5 h-auto'
            placeholder={newPlaceholder}
            required
          />
        </div>
        <div class='mb-6'>
          <label
            for='password'
            class='block mb-2 text-sm font-medium text-[#383f51]'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5'
            placeholder='•••••••••'
            required
          />
        </div>
        <div class='mb-6'>
          <label
            for='confirm_password'
            class='block mb-2 text-sm font-medium dark:text-white'
          >
            Confirm password
          </label>
          <input
            type='password'
            id='confirm_password'
            class='bg-gray-50 border border-gray-300 placeholder:italic placeholder:text-slate-400 text-sm rounded-lg focus:ring-[#383f51] focus:border-[#383f51] block w-full p-2.5'
            placeholder='•••••••••'
            required
          />
        </div>
        <div class='flex items-start mb-6'>
          <div class='flex items-center h-5'>
            <input
              id='remember'
              type='checkbox'
              value=''
              class='w-4 h-4 border border-gray-300 placeholder:italic placeholder:text-slate-400 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
              required
            />
          </div>
          <label
            for='remember'
            class='ml-2 text-sm font-medium dark:text-gray-300'
          >
            I agree with the{' '}
            <a
              href='#'
              class='text-blue-600 hover:underline dark:text-[#383f51]'
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type='submit'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateForm
