import Button from "./ui/button";
import Text from "./ui/text";

type HeroSectionProps = {
  tagline?: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  onButtonClick?: () => void;
};

const HeroSection = ({
  tagline,
  title,
  description,
  buttonText,
  imageSrc,
  onButtonClick,
}: HeroSectionProps) => {
  return (
    <section className="w-full h-[90vh] relative mt-18">
      <img
        src={imageSrc}
        alt="Hero Background"
        className="w-full h-full object-cover object-center z-0"
      />

      <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8">
        <div className="bg-blue-300 bg-opacity-90 space-y-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full mr-0 sm:mr-12 md:mr-20 lg:mr-32">
          {tagline && <Text className="text-sm sm:text-base">{tagline}</Text>}
          <Text
            variant="heading"
            className="text-[#06476a] text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            {title}
          </Text>
          <Text className="text-sm sm:text-base md:text-lg">
            {description}
          </Text>
          <Button
            onClick={onButtonClick}
            className="py-3 px-6 rounded-full bg-[#06476a] text-white"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
