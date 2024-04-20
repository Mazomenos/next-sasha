export default function NewPartner() {

    return (
        <div className="overflow-x-auto bg-white mt-4 mr-2 mb-4 flex-grow rounded-lg">
            <div className="flex flex-col items-end mr-6">
                <button className="bg-black text-sm text-white py-1 px-2 rounded mt-4  sm:w-auto">
                    New Partner +
                </button>
            </div>

            <table className=" ml-4 mr-6 mt-4 w-[96%] min-w-max">
                <thead className=" bg-[#F3F3F3] rounded-t-lg ">
                    <tr >
                        <th className="rounded-tl-lg">#</th>
                        <th className=" px-4 py-2">Image</th>
                        <th className=" px-4 py-2">Partner Name</th>
                        <th className=" px-4 py-2">EDI docs</th>
                        <th className=" px-4 py-2">Public Partner</th>
                        <th className="rounded-tr-lg">Actions</th>
                    </tr>
                </thead>

                <tbody className=" bg-white">
                    <tr className='text-center'>
                        <td className=" px-4 py-6">1</td>
                        <td className=" px-4 py-6">
                        </td>
                        <td className=" px-4 py-6">Amazon</td>
                        <td className=" px-4 py-6">850,856...</td>
                        <td className=" px-4 py-6">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </td>
                        <td className=" px-4 py-6">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>

                            </div>
                        </td>
                    </tr>
                    <tr className='text-center bg-[#F3F3F3]'>
                        <td className=" px-4 py-6">2</td>
                        <td className=" px-4 py-6">
                        </td>
                        <td className=" px-4 py-6">Walmart</td>
                        <td className=" px-4 py-6">850,810...</td>
                        <td className=" px-4 py-6">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </td>
                        <td className=" px-4 py-6">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="rounded-bl-lg"></td>
                        <td className=" px-4 py-6"></td>
                        <td className=" px-4 py-6"></td>
                        <td className=" px-4 py-6"></td>
                        <td className=" px-4 py-6"></td>
                        <td className="rounded-br-lg"></td>
                    </tr>
                    <tr className='text-center bg-[#F3F3F3]'>
                        <td className="rounded-bl-lg"></td>
                        <td className=" px-4 py-6"></td>
                        <td className=" px-4 py-6"></td>
                        <td className=" px-4 py-6"></td>
                        <td className=" px-4 py-6"></td>
                        <td className="rounded-br-lg"></td>
                    </tr>
                </tbody>
            </table>

            {/*Pagination*/}
            <div className="flex flex-col items-end my-12 mr-6 absolute bottom-0 right-0">
                <div className="flex text-gray-700 text-xs">
                    <div className="h-4 w-4 mr-1 flex justify-center items-center rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-2 h-2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                    <div className="flex justify-end h-4 font-medium rounded-full">
                        <div className="w-4 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
                        <div className="w-4 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
                        <div className="w-4 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
                        <div className="w-4 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-gray-300 text-black ">4</div>
                        <div className="w-4 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">5</div>
                        <div className="w-4 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
                        <div className="w-4 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
                        <div className="w-4 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-gray-300 text-white">4</div>
                    </div>
                    <div className="h-4 w-4 ml-1 flex justify-center items-center rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right w-2 h-2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    )
}