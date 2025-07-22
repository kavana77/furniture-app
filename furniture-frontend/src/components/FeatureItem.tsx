import Text from "./ui/text"

type FeatureItemProps = {
    icon: React.ReactNode
    title: string
    description: string
}
const FeatureItem = ({icon, title, description}:FeatureItemProps) => {
    return ( 
        <div className="flex gap-4 items-center">
            <div>{icon}</div>
            <div>
                <Text className="max-sm:text-[10px]">{title}</Text>
                <Text variant="muted" className="text-[10px] sm:text-[14px]">{description}</Text>
            </div>
        </div>
     );
}
 
export default FeatureItem;