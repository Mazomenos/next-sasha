"use client"

import { useState } from "react"
import Image from "next/image"
import PartnerCard from "@/components/PartnerCardComponent"
import { MdOutlineFileUpload } from "react-icons/md";

export default function Screen() {

    const [OpenModal, setOpenModal] = useState(false)

    const Partners: string[] = ["Amazon", "TP Link", "Walmart",]

    return (
        <main className="bg-slate-700 mr-2 mb-2 rounded-lg flex-1 flex justify-center items-center ">
            <button onClick={() => setOpenModal((prev => !prev))} className="bg-black rounded-lg text-white drop-shadow-md font-bold text-md px-8 py-1 hover:bg-white hover:text-black" >
                Abrir Modal
            </button>
            {OpenModal && (
                <main className="fixed inset-0  backdrop-blur-sm flex justify-center items-center">
                    <div className="bg-white w-1/3 h-1/2 rounded-lg p-10 text-black flex flex-col shadow-lg space-content">
                        <button onClick={() => setOpenModal((prev => !prev))} className="text-lg w-6 h-6 place-self-end">
                            <Image className="border border-white hover:border-black rounded-full hover:drop-shadow-md" src={"/x.svg"} width={80} height={80} alt="X"></Image>
                        </button>
                        <p className="text-center font-bold text-2xl">
                            Upload your document
                        </p>
                        <div>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer shadow-lg bg-gray-100 hover:bg-gray-200">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <MdOutlineFileUpload className="w-32 h-32"/>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 justify-end">
                            <button onClick={() => setOpenModal((prev => !prev))} className="rounded-lg border border-black border-2 hover:bg-black hover:text-white drop-shadow-md mt-3 py-1 w-1/5 place-self-center font-semibold transition">Cancel</button>
                            <button onClick={() => setOpenModal((prev => !prev))} className="rounded-lg text-white border bg-black border-black border-2 hover:bg-white hover:text-black drop-shadow-md mt-3 py-1 w-1/5 place-self-center font-semibold transition">Validate</button>
                        </div>
                    </div>
                </main>
            )}


        </main>
    )
}