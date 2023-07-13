export default function App() {
  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                    Education System
                  </h1>
                </div>
                {/* End Header */}
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Degree Title{" "}
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Duration
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Eligibilty Requirement
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Key Points
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              Bachelor’s Degree
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div className="grow">
                            <span className="block border-2 border-red-400 rounded-md p-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                              3- 4 Year’s
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <a className="block h-full p-6" href="#">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Minimum 70% in SSC (Varies with Stream) IELTS
                            6.0-6.5{" "}
                          </span>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Focussed on a Particular Subject Examples- BA,
                            B.Sc., B.Ed., BEng
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              Diplomas of Higher Education (DipHE)
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div className="grow">
                            <span className="block border-2 border-red-400 rounded-md p-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                              2- 3 Year’s
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <a className="block h-full p-6" href="#">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Below 60% in SSC IELTS 5.5-6.0
                          </span>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Equivalent to 2 years of Hons. Program Can be
                            Stretched to 3 years for Hons. Degree For
                            Professions such as social work, Medicine.
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              Certificates of Higher Education (CertHE)
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div className="grow">
                            <span className="block border-2 border-red-400 rounded-md p-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                              2- 3 Year’s
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <a className="block h-full p-6" href="#">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Below 60% in SSC IELTS overall 5.5.0-6.0
                          </span>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Equivalent to 2 years of Hons. Program Can be
                            Stretched to 3 years for Hons. Degree Designed for
                            you to build confidence to study at university level
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Foundation Degree	
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div className="grow">
                            <span className="block border-2 border-red-400 rounded-md p-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            2- 3 Year’s
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <a className="block h-full p-6" href="#">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Below 60% in SSC IELTS overall 5.5.0-6.0	
                          </span>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                          Equivalent to 2 years of Hons. Program Can be Stretched to 3 years for Hons. Degree Designed for you to build confidence to study at university level

                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Higher National Diploma (HND)	
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div className="grow">
                            <span className="block border-2 border-red-400 rounded-md p-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            2- 3 Year’s
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <a className="block h-full p-6" href="#">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Below 60% in SSC accepted IELTS overall 5.5-6.0	
                          </span>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                          2 year certificate If you score well, you can go for the third year

                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Specialized Undergraduate Master’s Degree Program	
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div className="grow">
                            <span className="block border-2 border-red-400 rounded-md p-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            4 Year’s
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <a className="block h-full p-6" href="#">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Minimum 70% in SSC (varies with stream) IELTS minimum 6.0	
                          </span>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                          Integrated course Not common Melds First Degree with Master’s Program

                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Sandwich Degree	
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <div className="grow">
                            <span className="block border-2 border-red-400 rounded-md p-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            4 Year’s
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <a className="block h-full p-6" href="#">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Minimum 70% in SSC (varies with stream) IELTS minimum 6.0	                          </span>
                        </a>
                      </td>
                      <td className="h-px">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                          One year is dedicated to workplace experience

                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* End Table */}
                
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </>
  );
}
