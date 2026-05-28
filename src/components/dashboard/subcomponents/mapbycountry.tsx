import { LayoutComp } from "./layoutcomp"

export const MapByCountry = ({ colSpan }: { colSpan?: string }) => {

    return (
        <LayoutComp colSpan={colSpan} title="Sales mapping by country" height="h-76 2xl:h-84">
            <img
            className="w-full h-full object-cover mt-2"
            src="/world.png"
            alt="Sales Mapping by Country"
            />
        </LayoutComp>
    )
}