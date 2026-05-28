import { LayoutComp } from "./layoutcomp"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", loyal: 320, new: 260, unique: 270 },
  { month: "Feb", loyal: 340, new: 270, unique: 350 },
  { month: "Mar", loyal: 280, new: 180, unique: 340 },
  { month: "Apr", loyal: 230, new: 150, unique: 280 },
  { month: "May", loyal: 210, new: 220, unique: 230 },
  { month: "Jun", loyal: 240, new: 300, unique: 210 },
  { month: "Jul", loyal: 300, new: 360, unique: 250 },
  { month: "Aug", loyal: 330, new: 370, unique: 290 },
  { month: "Sep", loyal: 320, new: 340, unique: 320 },
  { month: "Oct", loyal: 260, new: 270, unique: 300 },
  { month: "Nov", loyal: 200, new: 220, unique: 260 },
  { month: "Dec", loyal: 180, new: 180, unique: 230 },
];

export const Insights = ({ colSpan }: { colSpan?: string }) => {

    return (
        <LayoutComp colSpan={colSpan} title="Visitor insights">
            <div className="w-full h-46">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart
                data={data}
                >
                    <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#F1F2F6"
                    />

                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{
                        fill: "#8D93A8",
                        fontSize: 10,
                    }}
                    />

                    <YAxis
                    className="border"
                    ticks={[0, 100, 200, 300, 400]}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={28}
                    tick={{
                        fill: "#8D93A8",
                        fontSize: 10,
                    }}
                    />

                    <Tooltip />

                    <Line
                    type="natural"
                    dataKey="loyal"
                    stroke="#A700FF"
                    strokeWidth={3.5}
                    dot={false}
                    />

                    <Line
                    type="natural"
                    dataKey="new"
                    stroke="#EF4444"
                    strokeWidth={3.5}
                    dot={false}
                    />

                    <Line
                    type="natural"
                    dataKey="unique"
                    stroke="#3CD856"
                    strokeWidth={3.5}
                    dot={false}
                    />
                </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-center items-center gap-6 text-xs text-[#464E5F] text-nowrap">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-xs bg-[#A700FF]" />
                    <span>Loyal Customers</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-xs bg-[#EF4444]" />
                    <span>New Customers</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-xs bg-[#3CD856]" />
                    <span>Unique Customers</span>
                </div>
            </div>
        </LayoutComp>
    )
}