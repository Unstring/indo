export default function App() {
    return (
        <>
        
        <main id="content" role="main">
          <div className="max-w-7xl mx-auto bg-white border-x-gray-200 py-10 px-4 sm:px-6 lg:px-8 xl:border-x dark:bg-gray-800 dark:border-x-gray-700">
            {/* Page Heading */}
            <header className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold text-blue-600">
                Starter Pages &amp; Examples
              </p>
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                Boxed Layout using Tailwind CSS
              </h1>
              <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
                This is a boxed layout example using Tailwind CSS.
              </p>
              <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <a
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
                  target="_blank"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Get the source code
                </a>
                
              </div>
            </header>
            {/* End Page Heading */}
          </div>
        </main>
        "
      </>
      
    )
  }