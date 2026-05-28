interface LayoutCompProps {
    children: React.ReactNode;
    height?: string;
    colSpan?: string;
    title: string;
}

export const LayoutComp = ({ children, height, colSpan, title }: LayoutCompProps) => {

    return (
        <section className={`${height} ${colSpan} flex flex-col gap-5 bg-white rounded-[20px] border border-[#F8F9FA] shadow px-5 py-4.5`}>
            <span className="2xl:text-lg font-semibold text-[#05004E] capitalize">{ title }</span>
            { children }
        </section>
    )
}