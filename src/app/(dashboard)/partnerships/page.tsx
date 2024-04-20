import PartnershipList from "@/components/partnerships/PartnershipList";
import Container from "@/components/container";
export default function Partnerships() {
  return (
      <div className="bg-white mr-2 mb-2 rounded-lg flex-1 ">
        <div className="  grid justify-items-end w-full my-4">
          <button className=" bg-black  font-semibold hover:text-black text-white py-2 px-4 mr-5 border-2 hover:border-black border-transparent hover:bg-white rounded">
            {" "}
            + Partnership
          </button>
        </div>

        <PartnershipList></PartnershipList>
      </div>
  );
}
