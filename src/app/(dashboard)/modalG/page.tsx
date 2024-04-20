"use client"

import { useState } from "react"
import Image from "next/image"
import PartnerCard from "@/components/PartnerCardComponent"

export default function Screen(){

    const [OpenModal,setOpenModal] = useState(false)

    const Partners:string[] = ["Amazon", "TP Link", "Walmart", ]

    return (
        <main className="bg-white mr-2 mb-2 rounded-lg flex-1 flex justify-center items-center ">
            <button onClick={()=>setOpenModal((prev => !prev))} className="bg-black rounded-lg text-white drop-shadow-md font-bold text-md px-8 py-1 hover:bg-white hover:text-black hover:border-black border hover:border-solid">
                Abrir Modal
            </button>
                {OpenModal && (
                    <main className="fixed inset-0  backdrop-blur-sm flex justify-center items-center">
                        <div className="bg-white w-1/3 h-1/2 rounded-lg p-5 text-black flex flex-col shadow-lg">
                            <button onClick={()=>setOpenModal((prev => !prev))} className="text-lg w-6 h-6 place-self-end">
                                <Image className="border border-white hover:border-black rounded-full hover:drop-shadow-md"  src={"/x.svg"} width={80} height={80} alt="X"></Image>
                            </button>
                            <p className="text-center font-bold text-2xl">
                                Partners
                            </p>
                            <hr className="w-9/10 h-px   bg-gray-100 border-0 rounded dark:bg-gray-700 my-2"/>
                            <div className="overflow-y-auto h-[188px]">
                                {Partners.map((partner)=> {
                                    return (
                                        <>
                                        <PartnerCard partner={partner}></PartnerCard>
                                        </>
                                    )
                                })}
                            </div>
                            <button onClick={()=>setOpenModal((prev => !prev))} className="rounded-lg border border-black border-2 hover:bg-black hover:text-white drop-shadow-md mt-3 py-1 w-1/5 place-self-center font-semibold transition">Cancel</button>
                        </div>
                    </main>
                )}


        </main>
    )
}