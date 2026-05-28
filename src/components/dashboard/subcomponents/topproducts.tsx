interface DataRowProps {
    order: number;
    product: string;
    popularity: number;
    sales: number;
    color: string;
}

export const TopProducts = () => {

    const DataRow = ({ order, product, popularity, sales, color }: DataRowProps) => {
        return (
            <div className="flex-1 grid grid-cols-20 items-center gap-4 text-[13px] 2xl:text-sm px-4 border-b border-[#EDF2F6] last:border-b-0">
                <span className="col-span-2 text-[#444A6D]">{'0' + order}</span>
                <span className="col-span-8 text-[#444A6D] text-nowrap">{product}</span>
                <div style={{ background: color + '5a' }} className="col-span-7 w-full h-1.5 rounded-full overflow-hidden">
                    <div style={{ width: `${popularity}%`, background: color }} className="h-full rounded-full"></div>
                </div>
                <span style={{ background: color + '1a', color: color }} className="col-span-3 w-12 text-xs text-center rounded-lg py-1 border ${borderColor} mx-auto">
                    {sales + "%"}
                </span>
            </div>
        )
    }

    return (
        <section className="h-76 2xl:h-84 flex flex-col gap-6 bg-white rounded-[20px] border border-[#F8F9FA] shadow pt-4.5 pb-2.5">
            <span className="2xl:text-lg font-semibold text-[#05004E] capitalize pl-5">Top products</span>
            <div className="h-full flex flex-col">
                <div className="grid grid-cols-20 items-center gap-4 text-xs text-[#96A5B8] border-b border-[#EDF2F6] px-4 pb-3">
                    <span className="col-span-2">#</span>
                    <span className="col-span-8">Name</span>
                    <span className="col-span-7">Popularity</span>
                    <span className="col-span-3">Sales</span>
                </div>
                <DataRow order={1} product="Home decor range" popularity={80} sales={45} color="#0095FF"/>
                <DataRow order={2} product="Disney princess pink bag 18'" popularity={60} sales={29} color="#00E096"/>
                <DataRow order={3} product="Bathroom essentials" popularity={50} sales={18} color="#884DFF"/>
                <DataRow order={4} product="Apple smartwatches" popularity={35} sales={25} color="#FF8F0D"/>
            </div>
        </section>
    )
}