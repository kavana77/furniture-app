import type { InspirationGalleryProps } from "../types/data";

const InspirationGallery = ({item}:InspirationGalleryProps) => {
    return ( 
        <div className="flex gap-8 justify-center py-6">
            {item.map((img, index)=>{
                return(
                    <div key={index}
                     className={`relative overflow-hidden transition-transform ${
            index === 1 ? "-translate-y-6" : "translate-y-0"
          }`}>
                        <img src={img.imageSrc}
                        alt={img.alt}/>
          
                        
                    </div>
                )
            })}
        </div>
     );
}
 
export default InspirationGallery;