"use client";

import { MdOutlineFileUpload } from "react-icons/md";
import EDIPartnershipTable from "@/components/EDIPartnershipTable";

export default function PartnershipTable() {
    return (
        <div className="bg-slate-700 mr-2 mb-2 rounded-lg flex-1 ">
            <div className="flex justify-end mt-8 mr-4">
                <button className="bg-black text-white px-4 py-2 flex items-center rounded-lg hover:bg-white hover:text-black hover:border-black border hover:border-solid">
                    Download PO Test <MdOutlineFileUpload className="ml-2" />
                </button>
            </div>
            <hr className="flex-grow border-gray-300 ml-12 mr-12 mt-8" />
            <EDIPartnershipTable />
        </div>
    )
}
