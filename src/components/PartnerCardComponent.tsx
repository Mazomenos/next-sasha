

export default function PartnerCard(props:{partner:string}){

    return (
        <main className="flex flex-row h-20 border rounded-lg bg-[#F6F6F6] divide-x divide-solid divide-[#E7E7E7] px-3 my-3 justify-center items-center drop-shadow-md">
            <div className="basis-1/2  font-bold text-md">
                <p>{props.partner} Connection</p>
            </div>
            <div className=" basis-1/2 flex flex-col ">
                <button className="bg-black rounded-lg text-white place-self-end drop-shadow-md font-bold text-md px-8 py-1 hover:bg-white hover:text-black transition duration-100">View</button>
            </div>
        </main>
    )
}