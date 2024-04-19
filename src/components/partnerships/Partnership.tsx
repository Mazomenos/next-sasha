import React, { ReactNode } from "react";
import Badge from "./Badge";

interface IPartner {
    partner_item: {
        id: number;
        name: string;
        badge: string;
    };
}

export default function Partnership({ partner_item }: IPartner) {
    return (
        <li
            key={partner_item.id}
            className="flex bg-cgrey dark:bg-gray-900 justify-between flex-row place-items-start mx-1 my-2 w-full px-8 shadow-lg shadow-neutral-300 dark:shadow-neutral-900 hover:bg-chgrey border border-transparent rounded py-6 dark:hover:bg-gray-700"
        >
            <div>
                <p>{partner_item.name}</p>
            </div>
            <div>
                <Badge badgeType = {partner_item.badge} />
            </div>
        </li>
    );
}
