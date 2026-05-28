import { ArrowDownSvg, NotificationSvg, SearchSvg, UsSvg } from "../svg"

export const Topbar = () => {

    return (
        <div className=" flex justify-between gap-3 items-center px-6 py-4">
            <h2 className="text-[#151D48] text-[28px] font-semibold">
                Dashboard
            </h2>
            <div className="flex items-center gap-6">
                <div className="min-w-100 flex items-center gap-2 text-[#5D5FEF] bg-[#F9FAFB] rounded-2xl px-5.5 py-3">
                    <SearchSvg/>
                    <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full text-[#737791] bg-transparent focus:outline-none"
                    />
                </div>
                <div className="flex items-center gap-3 font-medium px-3">
                    <UsSvg/>
                    <span>Eng (US)</span>
                    <ArrowDownSvg/>
                </div>
                <div className="flex items-center gap-5">
                    <button
                    className="relative h-fit flex items-center gap-2 text-[#FFA412] bg-[#FFFAF1] rounded-lg p-2.5"
                    type="button">
                        <NotificationSvg/>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                    </button>
                    <div className="flex items-center gap-4">
                        <img
                        src="/user-profile.webp"
                        alt="User Avatar"
                        className="w-13 h-13 rounded-2xl object-cover"
                        />
                        <div className="flex gap-3 mr-4">
                            <div className="flex flex-col justify-center gap-0.5">
                                <span className="text-sm font-medium text-[#151D48]">Musfiq</span>
                                <span className="text-[13px] text-[#737791]">Admin</span>
                            </div>
                            <ArrowDownSvg/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}