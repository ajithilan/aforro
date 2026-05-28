import { useState } from "react";
import { DashboardSvg, LeaderboardSvg, LogoSvg, MessagesSvg, OrderSvg, ProductsSvg, SalesSvg, SettingsSvg, SignOutSvg } from "../svg"

interface NavBtnProps {
    icon: React.ReactNode;
    label: string;
};

export const Sidebar = ({ handlePage }: { handlePage: (page: string) => void }) => {
    const [activeBtn, setActiveBtn] = useState("Dashboard");

    const handleNavClick = (label: string) => {
        setActiveBtn(label);
        handlePage(label);
    }

    const NavBtn = ({ icon, label }: NavBtnProps) => (
        <button 
        className={`flex items-center gap-4 text-sm px-4 py-3 ${activeBtn === label ? 'bg-[#5D5FEF] text-white shadow font-medium' : 'text-[#737791] hover:bg-gray-200'}
                    rounded-[10px] transition-colors duration-200`}
        onClick={() => handleNavClick(label)}
        type="button">
            { icon }
            <span>{ label }</span>
        </button>
    )

    return (
        <div className="w-62 flex flex-col gap-8 px-6 py-7">
            <h1 className="flex items-center gap-3.5 text-[#151D48] text-2xl font-semibold">
                <div className="w-fit text-white bg-[#5D5FEF] p-1.5 rounded-sm">
                    <LogoSvg size="w-6 h-6"/>
                </div>
                Dabang
            </h1>
            <div className="flex flex-col gap-3 py-3">
                <NavBtn icon={<DashboardSvg/>} label="Dashboard"/>
                <NavBtn icon={<LeaderboardSvg/>} label="Leaderboard"/>
                <NavBtn icon={<OrderSvg/>} label="Orders"/>
                <NavBtn icon={<ProductsSvg/>} label="Products"/>
                <NavBtn icon={<SalesSvg/>} label="Sales"/>
                <NavBtn icon={<MessagesSvg/>} label="Messages"/>
                <NavBtn icon={<SettingsSvg/>} label="Settings"/>
                <NavBtn icon={<SignOutSvg/>} label="Sign Out"/>
            </div>
            <div className="relative w-fit text-center text-white bg-[#5D5FEF] rounded-2xl px-7 py-5.5 overflow-hidden">
                <div className="absolute -top-24 -right-10 scale-x-115 w-40 h-40 bg-linear-to-tr from-white/20 to-45% to-white/0 rounded-full z-10"></div>
                <div className="absolute -bottom-32 -left-32 w-50 h-50 bg-linear-to-bl from-white/20 to-35% to-white/0 rounded-full z-10"></div>
                <div className="flex flex-col items-center gap-2.5 z-20">
                    <div className="w-fit text-[#5D5FEF] bg-white p-1.5 rounded-xl">
                        <LogoSvg/>
                    </div>
                    <span className="text-xs">Dabang Pro</span>
                    <span className="w-30 text-[10px] text-white/80">Get access to all features on tetumbas</span>
                    <button 
                    className="flex items-center gap-4 bg-white text-[#5D5FEF] hover:bg-gray-200 text-xs font-semibold rounded-md px-6 py-1.5 mt-2 transition-colors duration-200"
                    type="button">
                        Get Pro
                    </button>
                </div>
            </div>
        </div>
    )
}