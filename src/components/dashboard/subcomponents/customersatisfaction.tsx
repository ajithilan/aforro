import { LayoutComp } from "./layoutcomp"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { month: "Jan", lastMonth: 45, thisMonth: 90 },
  { month: "Feb", lastMonth: 56, thisMonth: 72 },
  { month: "Mar", lastMonth: 40, thisMonth: 78 },
  { month: "Apr", lastMonth: 42, thisMonth: 66 },
  { month: "May", lastMonth: 48, thisMonth: 82 },
  { month: "Jun", lastMonth: 46, thisMonth: 60 },
  { month: "Jul", lastMonth: 60, thisMonth: 89 },
];


export const CustomerSatisfaction = () => {

    return (
        <LayoutComp title="Customer satisfaction" height="h-76 2xl:h-84">
            <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <defs>
                        <linearGradient id="thisMonth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00E096" stopOpacity={0.35}/>
                        <stop offset="100%" stopColor="#00E096" stopOpacity={0}/>
                        </linearGradient>

                        <linearGradient id="lastMonth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0095FF" stopOpacity={0.25}/>
                        <stop offset="100%" stopColor="#0095FF" stopOpacity={0}/>
                        </linearGradient>
                    </defs>

                    <Area
                    type="natural"
                    dataKey="lastMonth"
                    stroke="#0095FF"
                    fill="url(#lastMonth)"
                    strokeWidth={2}
                    dot={{
                        r: 1,
                        fill: "#0095FF",
                        stroke: "#0095FF",
                        strokeWidth: 6,
                    }}
                    strokeLinecap="round"
                    />

                    <Area
                    type="natural"
                    dataKey="thisMonth"
                    stroke="#00E096"
                    fill="url(#thisMonth)"
                    strokeWidth={2}
                    dot={{
                        r: 1,
                        fill: "#00E096",
                        stroke: "#00E096",
                        strokeWidth: 6,
                    }}
                    strokeLinecap="round"
                    />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center items-center gap-6 text-xs text-[#464E5F] text-nowrap">
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-1 flex justify-center items-center bg-[#0080DA] rounded-full">
                            <div className="h-3 w-3 rounded-full bg-[#0095FF]" />
                        </div>
                        <span className="text-[#96A5B8] text-sm">Last Month</span>
                    </div>
                    <span className="font-medium">$3,004</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-1 flex justify-center items-center bg-[#05C283] rounded-full">
                            <div className="h-3 w-3 rounded-full bg-[#00E096]" />
                        </div>
                        <span className="text-[#96A5B8] text-sm">This Month</span>
                    </div>
                    <span className="font-medium">$4,504</span>
                </div>
            </div>
        </LayoutComp>
    )
}