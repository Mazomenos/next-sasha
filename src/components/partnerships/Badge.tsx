
type bType = {
    badgeType: string
}

export default function Badge({badgeType} : bType) {
    if (badgeType === "Approved") {
        return(
            <span className="bg-green-50 text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-green-950 dark:text-badgeGreen flex min-w-28 justify-center ring-1 ring-inset ring-green-800 dark:ring-green-200">Approved</span>
        )
    } else if (badgeType === "In Progress") {
        return(
            <span className="bg-yellow-50 text-yellow-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-yellow-950 dark:text-badgeYellow flex min-w-28 justify-center ring-1 ring-inset ring-yellow-800 dark:ring-yellow-200">In Progress</span>
        ) 
    } else if (badgeType === "Failed") {
        return(
            <span className="bg-red-50 text-red-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-red-950 dark:text-badgeRed flex min-w-28 justify-center ring-1 ring-inset ring-red-800 dark:ring-red-200">Failed</span>
        ) 
    }
}