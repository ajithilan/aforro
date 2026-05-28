import { LayoutComp } from "./layoutcomp"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", online: 15000, offline: 13000 },
  { day: "Tue", online: 18000, offline: 12500 },
  { day: "Wed", online: 7000, offline: 23000 },
  { day: "Thu", online: 16000, offline: 8000 },
  { day: "Fri", online: 12500, offline: 11500 },
  { day: "Sat", online: 17500, offline: 14000 },
  { day: "Sun", online: 21000, offline: 11500 },
];

export const TotalRevenue = () => {

    return (
        <LayoutComp title="Total revenue" height="h-76 2xl:h-84">
            <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={data}
                    barGap={4}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                        <CartesianGrid
                        vertical={false}
                        stroke="#F1F2F6"
                        strokeDasharray="3 3"
                        />

                        <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={12}
                        padding={{ left: 10, right: 10 }}
                        tick={{
                            fill: "#8D93A8",
                            fontSize: 12,
                        }}
                        />

                        <YAxis
                        width={40}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                        domain={[0, 25000]}
                        ticks={[0, 5000, 10000, 15000, 20000, 25000]}
                        tickFormatter={(value) => `${value / 1000}k`}
                        tick={{
                            fill: "#8D93A8",
                            fontSize: 12,
                        }}
                        />

                        <Tooltip cursor={{ fill: "rgba(0,0,0,0.03)" }}/>

                        <Bar dataKey="online" fill="#1E90FF" barSize={10}/>
                        <Bar dataKey="offline" fill="#20D489" barSize={10}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center items-center gap-6 text-xs text-[#464E5F] text-nowrap">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#0095FF]" />
                    <span>Online Sales</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#00E096]" />
                    <span>Offline Sales</span>
                </div>
            </div>
        </LayoutComp>
    )
}