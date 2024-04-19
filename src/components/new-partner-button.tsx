import React, {useState} from "react";
import CreatePartnerModal from "./create-partner-modal";

const NewPartnerButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/75 focus:ring-1 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2" onClick={toggleModal}>New Partner +</button>
            <CreatePartnerModal isOpen={isModalOpen} onClose={closeModal}/>
        </>
    );
};

export default NewPartnerButton;