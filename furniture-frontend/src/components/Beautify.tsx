import Button from "./ui/button";
import Text from "./ui/text";

type BeautifyProps={
    title: string
    description: string
    buttonText: string
    imageSrc: string
    imageAlt: string
}

const Beautify = ({title,description,buttonText,imageSrc,imageAlt}:BeautifyProps) => {
    return ( 
        <section className="h-auto flex mt-18 p-4 bg-gray-100 items-center gap-8 justify-between sm:p-12 ">
            <div className="w-1/2 space-y-6 md:p-14">
                <Text className="sm:text-2xl lg:text-3xl">{title}</Text>
                <Text variant="muted" className="sm:text-[16px] ">{description}</Text>
                <Button className="bg-[#06476a]">{buttonText}</Button>
            </div>
            <div className="w-1/2">
                <img src={imageSrc} alt={imageAlt} className="h-auto lg:w-100 object-cover"/>
            </div>
        </section>
     );
}
 
export default Beautify;