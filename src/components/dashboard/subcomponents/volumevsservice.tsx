import { LayoutComp } from "./layoutcomp"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { day: "Mon", top: 30, bottom: 40 },
  { day: "Tue", top: 28, bottom: 55 },
  { day: "Wed", top: 20, bottom: 50 },
  { day: "Thu", top: 25, bottom: 40 },
  { day: "Fri", top: 20, bottom: 35 },
  { day: "Sat", top: 35, bottom: 25 },
];


export const VolumeVsService = () => {

    return (
        <LayoutComp title="Volume vs Service Level" height="h-76 2xl:h-84">
            <div className="w-full h-full border-b border-[#EDF2F6]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={data}
                    barSize={14}
                    margin={{ top: 10, right: 0, left: 0, bottom: 20 }}
                    >
                        <Bar dataKey="bottom" stackId="a" fill="#0095FF" radius={[0, 0, 0, 0]}/>
                        <Bar dataKey="top" stackId="a" fill="#00E096" radius={[2, 2, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center items-center gap-6 text-xs text-[#464E5F] text-nowrap">
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#0095FF]" />
                        <span className="text-[#96A5B8] text-sm">Volume</span>
                    </div>
                    <span className="font-medium">1,135</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#00E096]" />
                        <span className="text-[#96A5B8] text-sm">Services</span>
                    </div>
                    <span className="font-medium">635</span>
                </div>
            </div>
        </LayoutComp>
    )
}