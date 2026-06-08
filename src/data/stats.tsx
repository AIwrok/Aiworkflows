import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "50+",
        icon: <BsBarChartFill size={34} className="text-secondary" />,
        description: "Automation workflows deployed across industries."
    },
    {
        title: "100%",
        icon: <BsFillStarFill size={34} className="text-primary" />,
        description: "Client-focused delivery with transparent communication."
    },
    {
        title: "24/7",
        icon: <PiGlobeFill size={34} className="text-green-500" />,
        description: "Self-hosted systems running around the clock."
    }
];
