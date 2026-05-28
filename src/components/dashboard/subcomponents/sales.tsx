import { ExportSvg, SalesSvg1, SalesSvg2, SalesSvg3, SalesSvg4 } from "../../../svg"

interface SalesDataCardProps {
    data: {
        icon: React.ReactNode;
        iconBg: string;
        title: string;
        value: string;
        percentage: string;
    };
    bgColor: string;
}

export const Sales = ({ colSpan }: { colSpan?: string }) => {

    const SalesDataCard = ({ data, bgColor }: SalesDataCardProps) => {
        return (
            <div className={`${bgColor} flex flex-col gap-3 px-4 py-3.5 rounded-2xl`}>
                <div className={`w-fit p-1.5 rounded-full ${data.iconBg}`}>
                    { data.icon }
                </div>
                <span className="text-[#151D48] text-xl 2xl:text-2xl font-semibold">{ data.value }</span>
                <span className="text-[#425166] text-sm 2xl:text-base font-medium leading-5 capitalize">{ data.title }</span>
                <span className="text-[#4079ED] text-[10px] 2xl:text-xs">{ data.percentage + " from yesterday" }</span>
            </div>
        )
    }

    return (
        <section className={`${colSpan} flex flex-col justify-between gap-10 bg-white rounded-[20px] border border-[#F8F9FA] shadow px-5 py-4.5`}>
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center gap-1.5">
                    <span className="2xl:text-lg font-semibold text-[#05004E]">Today's Sales</span>
                    <span className="text-[13px] text-[#737791]">Sales Summary</span>
                </div>
                <button
                className="flex items-center gap-2 text-xs text-[#0F3659] font-medium border border-[#C3D3E2] hover:bg-gray-100 rounded-md px-2 py-1.5 transition-colors duration-150"
                type="button">
                    <ExportSvg/>
                    Export
                </button>
            </div>
            <div className="grid grid-cols-4 gap-4 2xl:gap-6">
                <SalesDataCard
                bgColor="bg-[#FFE2E5]"
                data={{
                    icon: <SalesSvg1/>,
                    iconBg: "bg-[#FA5A7D]",
                    title: "Total sales",
                    value: "$1k",
                    percentage: "+8%"
                }}
                />
                <SalesDataCard
                bgColor="bg-[#FFF4DE]"
                data={{
                    icon: <SalesSvg2/>,
                    iconBg: "bg-[#FF947A]",
                    title: "Total order",
                    value: "300",
                    percentage: "+5%"
                }}
                />
                <SalesDataCard
                bgColor="bg-[#DCFCE7]"
                data={{
                    icon: <SalesSvg3/>,
                    iconBg: "bg-[#3CD856]",
                    title: "Product sold",
                    value: "5",
                    percentage: "+1.2%"
                }}
                />
                <SalesDataCard
                bgColor="bg-[#F3E8FF]"
                data={{
                    icon: <SalesSvg4/>,
                    iconBg: "bg-[#BF83FF]",
                    title: "New customers",
                    value: "8",
                    percentage: "0.5%"
                }}
                />
            </div>
        </section>
    )
}