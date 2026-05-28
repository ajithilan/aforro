import { CustomerSatisfaction } from "./subcomponents/customersatisfaction"
import { Insights } from "./subcomponents/insights"
import { MapByCountry } from "./subcomponents/mapbycountry"
import { Sales } from "./subcomponents/sales"
import { TargetVsReality } from "./subcomponents/targetvsreality"
import { TopProducts } from "./subcomponents/topproducts"
import { TotalRevenue } from "./subcomponents/totalrevenue"
import { VolumeVsService } from "./subcomponents/volumevsservice"

export const Dashboard = () => {

    return (
        <main className="min-h-full grid grid-cols-14 gap-5 2xl:gap-6 bg-[#F8F8FB] px-6 pt-6 pb-8">
            <Sales colSpan="col-span-8"/>
            <Insights colSpan="col-span-6"/>
            <div className="col-span-6 grid gap-5 2xl:gap-6">
                <TotalRevenue/>
                <TopProducts/>
            </div>
            <div className="col-span-8 grid grid-cols-2 gap-5 2xl:gap-6">
                <CustomerSatisfaction/>
                <TargetVsReality/>
                <MapByCountry/>
                <VolumeVsService/>
            </div>
        </main>
    )
}