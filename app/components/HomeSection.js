import SectionHeader from "./SectionHeader"

export default function HomeSection({children, sectionHeader, icon}) {
    return (
        <section className="mt-16">
            <SectionHeader header={sectionHeader} icon={icon}></SectionHeader>
            <div className="container mx-auto relative mt-4">
                {children}
            </div>
        </section>
    )
}