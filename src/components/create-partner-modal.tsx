import React, {useEffect} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreatePartnerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-filter backdrop-blur-sm">
            <div className="w-[40%] ">
                <div className="bg-white rounded-md shadow-lg dark:bg-gray-700">
                    <div className="flex justify-end p-3 pb-0">
                        <button type="button" onClick={onClose} className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>
                    <h3 className="flex justify-center items-center text-lg font-bold text-gray-900 dark:text-white">
                        Create Partner
                    </h3>

                    <form className="pt-2 pb-5">
                        <div className="grid gap-4 mb-4 grid-cols-2 pr-10 pl-10 pb-10">
                            <div className="col-span-2 pb-5">
                                <label htmlFor="name" className="block text-sm font-bold text-gray-900 dark:text-white">Partner name</label>
                                <input type="text" name="name" id="name" className="text-gray-900 text-sm w-full pr-1.0 pt-0 pl-0 pb-1 border-b border-gray-900  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Amazon" />
                            </div>

                            <div className="col-span-2 sm:col-span-1 relative pb-5 pr-10">
                                <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Delimeters</label>
                                <div className="relative border-b border-black">
                                    <select
                                        id="category"
                                        className="text-gray-600 text-sm w-full pr-1.0 pt-0 pl-0 pb-1 appearance-none bg-transparent border-none focus:outline-none dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white">
                                        <option>"*", "~"</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 w-4 pointer-events-none">
                                        <svg
                                            className="h-full w-full text-gray-900 dark:text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="M20 8l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 sm:col-span-1 relative pb-5">
                                <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">EDI Version</label>
                                <div className="relative border-b border-black">
                                    <select
                                        id="category"
                                        className="text-gray-600 text-sm w-full pr-1.0 pt-0 pl-0 pb-1 appearance-none bg-transparent border-none focus:outline-none dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white">
                                        <option>EDI X12 8040</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 w-4 pointer-events-none">
                                        <svg
                                            className="h-full w-full text-gray-900 dark:text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="M20 8l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap col-span-2 sm:col-span-1">
                                <div className="w-[30%] relative">
                                    <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">EOL</label>
                                    <div className="relative border-b border-black w-3/5">
                                        <select
                                            id="category"
                                            className="text-gray-600 text-sm w-full pr-1.0 pt-0 pl-0 pb-1 appearance-none bg-transparent border-none focus:outline-none dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        >
                                            <option>~</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 w-4 pointer-events-none">
                                            <svg
                                                className="h-full w-full text-gray-900 dark:text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1"
                                                    d="M20 8l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[70%] mt-4 sm:mt-0 sm:pl-1 relative">
                                    <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Business Rules</label>
                                    <div className="relative border-b border-black">
                                        <select
                                            id="category"
                                            className="text-gray-600 text-sm w-full pr-1.0 pt-0 pl-0 pb-1 appearance-none bg-transparent border-none focus:outline-none dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        >
                                            <option>amazon_b.pdf</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 w-4 pointer-events-none transform -rotate-90">
                                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-start items-center col-span-2 sm:col-span-1">
                                <button className="text-black border border-gray-950 inline-flex items-center bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-8 text-center dark:bg-gray-100 dark:hover:bg-gray-400 dark:focus:ring-gray-700">
                                    Edit
                                </button> 
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="pr-5 pl-5">
                                <button type="submit" className="text-black border border-gray-950 inline-flex items-center bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-md text-sm px-8 py-1.5 text-center dark:bg-grey-100 dark:hover:bg-gray-400 dark:focus:ring-gray-700 mb-2 md:mb-0 md:mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-8 py-1.5 text-center dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-gray-950">
                                    Create
                                </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePartnerModal;