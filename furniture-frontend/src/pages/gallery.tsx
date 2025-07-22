import InspirationGallery from "../components/InspirationGallery";
import Text from "../components/ui/text";
import { GalleryImages } from "../utils/constant";

const Gallery = () => {
  return (
    <div className="mt-18 text-center space-y-5">
      <Text variant="heading">Inspiration Collection</Text>
      <Text variant="muted" className="sm:text-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
      <InspirationGallery item={GalleryImages} />
    </div>
  );
};

export default Gallery;
