export default function App() {
    return (
        <>
        {/* Features */}
        <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
Upcoming Events              </h1>
              {/* <p className="mt-1 text-gray-600 dark:text-gray-400">
                We'd love to talk about how we can help you.
              </p> */}
            </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Tab Nav */}
          
          <nav
            className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
              id="tabs-with-card-item-1"
              data-hs-tab="#tabs-with-card-1"
              aria-controls="tabs-with-card-1"
              role="tab"
            >
              <span className="md:flex">
                <svg
                  className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <span className="md:grow md:ml-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
Study in USA Webinar                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
Lorem ipsum dolor sit amet consectetur adipisicing.                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
              id="tabs-with-card-item-2"
              data-hs-tab="#tabs-with-card-2"
              aria-controls="tabs-with-card-2"
              role="tab"
            >
              <span className="md:flex">
                <svg
                  className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                  />
                </svg>
                <span className="md:grow md:ml-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
Study in Canada Webinar                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, esse.                    it.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
              id="tabs-with-card-item-3"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
            >
              <span className="md:flex">
                <svg
                  className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                </svg>
                <span className="md:grow md:ml-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                    Solving problems for every Students
                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quae.                  </span>
                </span>
              </span>
            </button>
          </nav>
          {/* End Tab Nav */}
          {/* Tab Content */}
          <div className="mt-12 md:mt-16">
            <div
              id="tabs-with-card-1"
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-1"
            >
              <h1>this is some text for 1 usa</h1>
            </div>
            <div
              id="tabs-with-card-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-2"
            >
              
some text for canada            </div>
            <div
              id="tabs-with-card-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-3"
            >
             some text for students
            </div>
          </div>
          {/* End Tab Content */}
        </div>
        {/* End Features */}
      </>
      
      
    )
  }