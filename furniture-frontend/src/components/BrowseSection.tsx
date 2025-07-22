import Text from "./ui/text";

export type Category= {
    imageSrc: string;
    title: string
}
type BrowserSectionProps={
    heading: string
    subheading: string
    categories: Category[]
}

const BrowserSection = ({heading,subheading,categories}:BrowserSectionProps) => {
    return ( 
        <section className="mt-18 p-8 lg:p-12 text-center space-y-3">
            <Text variant="heading" className="max-sm:text-3xl">{heading}</Text>
            <Text variant="muted">{subheading}</Text>
            <div className="flex justify-center gap-6 text-center pt-6">
                {categories.map((category, index)=>{
                    return(
                    <div key={index}>
                        <img src={category.imageSrc} alt={category.title}/>
                        <h3>{category.title}</h3>
                    </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default BrowserSection;