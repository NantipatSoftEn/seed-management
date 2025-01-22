import React, { useEffect, useState } from 'react'
// import PictureUploader from '../components/PictureUploader'
// import ToggleSwitch from '../components/ToggleSwitch'
import { asset, fetchData } from 'src/lib/data'
import { Personalities } from '$constants/personalityType'
import BlessingStat from '$components/BlessingStats'
import type { Lamb } from 'src/types/InfoLamb'
import PictureUploader from '$components/PictureUploader'
import ToggleSwitch from '$components/ToggleSwitchR'

export const LambSettings = ({ id }: { id: string | undefined }) => {
  const [lamb, setLamb] = useState<Lamb | null>(null)

  useEffect(() => {
    const fetchLambData = async () => {
      const lambs = await fetchData('lambs')
      const foundLamb = lambs.find(lamb => lamb.id === Number(id)) || null
      setLamb(foundLamb)
    }
    fetchLambData()
		console.log('lamb', lamb)
  }, [id])

  return (
    <div>
      <div className="grid grid-cols-1 px-4 pt-6 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4">
        <div className="col-span-full mb-4 xl:mb-2">
          <nav className="mb-5 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <a
                  href="#section"
                  className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                >
                  <svg
                    className="mr-2.5 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="/crud/lambs"
                    className="ml-1 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white md:ml-2"
                  >
                    Lambs
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span
                    className="ml-1 text-gray-400 dark:text-gray-500 md:ml-2"
                    aria-current="page"
                  >
                    Settings
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            User settings
          </h1>
        </div>
        <div className="col-span-full xl:col-auto">
          <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2">
            <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
              <PictureUploader
                title="Profile picture"
                profilePicture={lamb?.profilePicture}
              />
            </div>
          </div>

          <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2">
            <div className="flow-root">
              <h3 className="text-xl font-semibold dark:text-white">
                Social accounts
              </h3>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 dark:text-white"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-base font-semibold text-gray-900 dark:text-white">
                        Facebook account
                      </span>
                      <a
                        href="section"
                        className="block truncate text-sm font-normal text-primary-700 hover:underline dark:text-primary-500"
                      >
                        <input
                          type="text"
                          name="facebook"
                          id="facebook"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                          placeholder=""
                          defaultValue={''}
                          required
                          readOnly
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 dark:text-white"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-base font-semibold text-gray-900 dark:text-white">
                        Twitter account
                      </span>
                      <a
                        href="section"
                        className="block truncate text-sm font-normal text-primary-700 hover:underline dark:text-primary-500"
                      >
                        <input
                          type="text"
                          name="twitter"
                          id="tacebook"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                          placeholder=""
                          defaultValue={''}
                          required
                          readOnly
                        />
                      </a>
                    </div>
                  </div>
                </li>

                <li className="pb-6 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/LINE_Brand_icon.png"
                        height="25"
                        width="25"
                        alt="LineLogo"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-base font-semibold text-gray-900 dark:text-white">
                        LINE
                      </span>
                      <span className="block truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        <input
                          type="text"
                          name="line"
                          id="line"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                          placeholder=""
                          defaultValue={''}
                          required
                          readOnly
                        />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="pb-6 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/Instagram_icon.png"
                        height="25"
                        width="25"
                        alt="InstragramLogo"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-base font-semibold text-gray-900 dark:text-white">
                        LINE
                      </span>
                      <span className="block truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        <input
                          type="text"
                          name="ig"
                          id="ig"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                          placeholder=""
                          defaultValue={''}
                          required
                          readOnly
                        />
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              {/* <div>
                <button className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Save all
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">
              ข้อมูลทั่วไป
            </h3>
            <form action="#">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nick Name
                  </label>
                  <input
                    type="text"
                    name="nick-name"
                    id="nick-name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder=""
                    defaultValue={lamb?.nickName ?? ''}
                    required
                    readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="Bonnie"
                    defaultValue={lamb?.firstName ?? ''}
                    required
                    
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="Green"
                    defaultValue={lamb?.lastName ?? ''}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="e.g. California"
                    defaultValue={lamb?.address ?? ''}
                    required
                    readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="example@company.com"
                    defaultValue={lamb?.email ?? ''}
                    required
                    readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone-number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="e.g. +(12)3456 789"
                    defaultValue={lamb?.phone ?? ''}
                    required
                    readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="birthday"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Birthday
                  </label>
                  <input
                    type="number"
                    name="birthday"
                    id="birthday"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="15/08/1990"
                    defaultValue={lamb?.birthday ?? ''}
                    required
                    readOnly
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="job"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    อาชีพ
                  </label>
                  <input
                    type="text"
                    name="job"
                    id="job"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="Development"
                    defaultValue={lamb?.job ?? ''}
                    required
                    readOnly
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Personality
                  </label>
                  {/* <select
                    id="personality"
                    name="personality"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    // onChange={e => setSelectedPersonality(e.target.defaultValue)}
										readOnly
                  >
                  
                    {Personalities.map(p => (
                      <option key={p.type} defaultValue={p.type}>
                        {p.type}
                      </option>
                    ))}
                  </select> */}
                  <input
                    type="text"
                    name="job"
                    id="job"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="Development"
                    defaultValue={lamb?.persernality ?? ''}
                    required
                    readOnly
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ความสนใจ 3 อย่าง
                  </label>
                  <input
                    type="text"
                    id="interesting"
                    name="interesting"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="example เทคโนโลยี,การลงทุน,จิตวิทยา"
                    defaultValue={lamb?.interesting ?? ''}
                    required
                    readOnly
                  />
                </div>

                {/* <div className="sm:col-full col-span-6">
                  <button
                    className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="submit"
                  >
                    Save all
                  </button>
                </div> */}
              </div>
            </form>
          </div>
          <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">
              ข้อมูลฝ่ายวิญญาณ
            </h3>
            <form action="#">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mentor"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    mentor
                  </label>
                  <input
                    type="text"
                    name="mentor"
                    id="mentor"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="Mentor"
                    defaultValue={''}
                    required
										readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="groupcare"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    กลุ่มแคร์
                  </label>
                  <input
                    type="text"
                    name="groupcare"
                    id="groupcare"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="กลุ่มแคร์"
                    defaultValue={lamb?.groupCare ?? ''}
                    required
										readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    โบสก่อนหน้า
                  </label>
                  <input
                    type="text"
                    name="previous-chruch"
                    id="previous-chruch"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="Seed Chruch"
                    defaultValue={lamb?.previouseChurch ?? ''}
                    required
										readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    อายุความเชื่อในพระเจ้า
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="Enter a number"
                    defaultValue={lamb?.age ?? ''}
                    required
										readOnly
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    หมายเหตุ
                  </label>
                  <input
                    type="text"
                    id="remark"
                    name="remark"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                    placeholder="บอกเล่าสถานการณ์"
                    defaultValue={lamb?.remark ?? ''}
                    required
                  />
                </div>
                {/* <div className="sm:col-full col-span-6">
                  <button
                    className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="submit"
                  >
                    Save all
                  </button>
                </div> */}
              </div>
            </form>
          </div>
          <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">
              Stat ของประทานฝ่ายวิญญาณ
            </h3>
            <BlessingStat score={lamb?.gift}/>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 px-4 xl:grid-cols-2 xl:gap-4">
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 xl:mb-0">
          <div className="flow-root">
            <h3 className="text-xl font-semibold dark:text-white">
              Alerts & Notifications
            </h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              You can set up Themesberg to get notifications
            </p>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex items-center justify-between py-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Company News
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get Themesberg news, announcements, and product updates
                  </div>
                </div>
                <ToggleSwitch id="company-news" />
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Account Activity
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get important notifications about you or activity you've
                    missed
                  </div>
                </div>

                <ToggleSwitch id="account-activity" checked />
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Meetups Near You
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get an email when a Dribbble Meetup is posted close to my
                    location
                  </div>
                </div>
                <ToggleSwitch id="meetups" />
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    New Messages
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get Themesberg news, announcements, and product updates
                  </div>
                </div>
                <ToggleSwitch id="new-messages" />
              </div>
            </div>
            <div className="mt-6">
              <button className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Save all
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 xl:mb-0">
          <div className="flow-root">
            <h3 className="text-xl font-semibold dark:text-white">
              Email Notifications
            </h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              You can set up Themesberg to get email notifications
            </p>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex items-center justify-between py-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Rating reminders
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Send an email reminding me to rate an item a week after
                    purchase
                  </div>
                </div>
                <ToggleSwitch id="rating-reminders" />
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Item update notifications
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Send user and product notifications for you
                  </div>
                </div>
                <ToggleSwitch id="item-update" />
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Item comment notifications
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Send me an email when someone comments on one of my items
                  </div>
                </div>
                <ToggleSwitch id="item-comment" />
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex flex-grow flex-col">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Buyer review notifications
                  </div>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Send me an email when someone leaves a review with their
                    rating
                  </div>
                </div>
                <ToggleSwitch id="buyer-rev" />
              </div>
            </div>
            <div className="mt-6">
              <button className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Save all
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
