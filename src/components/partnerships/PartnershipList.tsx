import React from "react";

import Partnership from "./Partnership";

type p_item = {
    id: number;
    name: string;
    badge: string;
};

export default function PartnershipList() {
    const partnerships: p_item[] = [
        { id: 1, name: "Amazon Connection", badge: "Approved" },
        { id: 2, name: "Walmart Connection", badge: "In Progress" },
        { id: 3, name: "New Connection", badge: "Failed" },
        { id: 4, name: "New Connection 2", badge: "Approved" },
    ];

    return (
        <ul className=" w-full grid justify-items-center align-middle mx-auto">
            {partnerships.map((p) => (
                <Partnership key={p.id} partner_item={p} />
            ))}
        </ul>
    );
}
