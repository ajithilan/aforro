import { RealitySvg, TargetSvg } from "../../../svg";
import { LayoutComp } from "./layoutcomp"
import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

const data = [
  { month: "Jan", reality: 14, target: 20},
  { month: "Feb", reality: 12, target: 18 },
  { month: "Mar", reality: 10, target: 24 },
  { month: "Apr", reality: 18, target: 20 },
  { month: "May", reality: 20, target: 28 },
  { month: "Jun", reality: 20, target: 28 },
  { month: "Jul", reality: 20, target: 28 },
];

export const TargetVsReality = () => {

    return (
        <LayoutComp title="Target vs Reality" height="h-76 2xl:h-84">
            <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={data}
                    barGap={2}
                    >
                        <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tick={{ fill: "#7B91B0", fontSize: 12 }}
                        />

                        <Bar dataKey="reality" fill="#4AB58E" barSize={14} radius={[4, 4, 4, 4]}/>
                        <Bar dataKey="target" fill="#FFCF00" barSize={14} radius={[4, 4, 4, 4]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center gap-2 2xl:gap-3 text-xs text-[#464E5F] text-nowrap">
                <div className="w-4/5 flex justify-between items-center gap-3">
                    <div className="flex items-center gap-2.5 2xl:gap-3">
                        <div className="bg-[#4AB58E]/10 rounded-md p-2 2xl:p-2.5">
                            <RealitySvg/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[#151D48] text-[10px] 2xl:text-xs font-semibold">Reality Sales</span>
                            <span className="text-[#737791] text-[8px] 2xl:text-[10px]">Global</span>
                        </div>
                    </div>
                    <span className="text-[#27AE60] text-xs 2xl:text-sm font-medium">8.823</span>
                </div>
                <div className="w-4/5 flex justify-between items-center gap-3">
                    <div className="flex items-center gap-2.5 2xl:gap-3">
                        <div className="bg-[#FFA800]/10 rounded-md p-2 2xl:p-2.5">
                            <TargetSvg/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[#151D48] text-[10px] 2xl:text-xs font-semibold">Target Sales</span>
                            <span className="text-[#737791] text-[8px] 2xl:text-[10px]">Commercial</span>
                        </div>
                    </div>
                    <span className="text-[#FFA412] text-xs 2xl:text-sm font-medium">12.122</span>
                </div>
            </div>
        </LayoutComp>
    )
}