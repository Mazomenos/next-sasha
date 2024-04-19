import PartnershipList from "@/components/partnerships/PartnershipList";
import Container from "@/components/container";
export default function Partnerships() {
  return (
      <Container>
        <div className="  grid justify-items-end w-full my-4">
          <button className=" bg-black  font-semibold hover:text-black text-white py-2 px-4 border-2 hover:border-black border-transparent hover:bg-white rounded">
            {" "}
            + Partnership
          </button>
        </div>

        <PartnershipList></PartnershipList>
      </Container>
  );
}
