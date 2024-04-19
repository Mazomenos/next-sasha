"use client"

import Image from "next/image"
import { useState } from "react"
import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";



export type Link = {
    name: string,
    path: string
    children: Link[]
}

const links:Link[] = [
    {
        name: "Tarea",
        path: "#",
        children: [
            {
               name: "Gustavo",
               path: "/modalG",
               children: [] 
            },
            {
                name: "Santiago",
                path: "/modalUpload",
                children: [] 
            },
            {
                name: "B",
                path: "/new-product",
                children: [] 
             },
             {
                name: "C",
                path: "/new-product",
                children: [] 
             },
             {
                name: "Angel",
                path: "/partnershipsedi",
                children: [] 
             },
        ]
    },
    {
        name: "Products",
        path: "#",
        children: [
            {
               name: "New Products",
               path: "/new-product",
               children: [] 
            }
        ]
    },
    {
        name: "Orders",
        path: "/orders",
        children: []
    },
    {
        name: "Providers",
        path: "/providers",
        children: []
    },
]


export default function Sidebar(){

    const router = useRouter()

    function RenderLinks(links:Link[], level:number): JSX.Element[]  {
        

        return links.map((link) => {
            
            const [IsOpen, setIsOpen] = useState(false)
            
            return(
            
            <>
            <button onClick={() => {setIsOpen((prev => !prev)); router.push(link.path)}} className="flex flex-row justify-between items-center p-1 rounded-lg hover:bg-indigo-900">
                {link.name}
                {link.children.length !== 0 && (
                    
                    !IsOpen ? (
                        <AiOutlineCaretDown className=""/>
                    ) : (
                        <AiOutlineCaretUp/>
                    )
                )}
            </button>
            {IsOpen && link.children.map((child) => (
                <>
                <button onClick={() => router.push(child.path)} className="flex flex-row p-1 rounded-lg hover:bg-violet-600">
                    {child.name}
                </button>
                </>
            ))}
            </>
            )
        });
        }

    return (
        <main className="flex flex-col items-center flex-wrap bg-black m-2 rounded-lg">
            <div className="m-5">
            <Image className="" src="/logo_flex.svg" width={200} height={200} alt="hola"></Image>
            </div>
            <hr className="w-48 h-px   bg-gray-100 border-0 rounded dark:bg-gray-700"/>
            <nav className="text-left px-3 py-3 flex flex-col w-full">
                {RenderLinks(links,0)}
            </nav>
          
        </main>
    )
}