export default function App() {
    return (
        <>
        {/* Hire Us */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
              Scholarship              </h1>
              <p className="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
              Many Canadian universities offer various scholarships to students along with their training programs. These scholarships can be of great help for students when it comes to covering the cost of studying/living in the country. Students that are looking to take advantage of such scholarships and grants must start early and research the various types of scholarships that are being offered by various universities. Why this is important? This is important because it may take a respectable amount of time to collect all the documents that are necessary to apply for a particular scholarship.


              </p>
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  What can I expect?
                </h2>
                <ul className="mt-2 space-y-2">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Industry-leading design
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Developer community support
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Simple and affordable
                    </span>
                  </li>
                </ul>
              </div>
              
            </div>
            {/* End Col */}
            <div className="relative">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Not sure? Talk to our advisors
                   </h2>
                <form>
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-firstname-hire-us-1"
                          className="block text-sm text-gray-700 font-medium dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-hire-us-1"
                          id="hs-firstname-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hs-lastname-hire-us-1"
                          className="block text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="hs-lastname-hire-us-1"
                          id="hs-lastname-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Mobile
                      </label>
                      <input
                        type="number"
                        name="hs-work-email-hire-us-1"
                        id="hs-work-email-hire-us-1"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label
                        htmlFor="hs-about-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Details
                      </label>
                      <textarea
                        id="hs-about-hire-us-1"
                        name="hs-about-hire-us-1"
                        rows={4}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    >
                      Send inquiry
                    </button>
                  </div>
                </form>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hire Us */}
      </>
      
    )
  }