import Text from "./ui/text";

export type Step = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
};
type HowItWorksProps = {
  heading: string;
  subheading: string;
  steps: Step[];
};
const HowItWorks = ({ heading, subheading, steps }: HowItWorksProps) => {
  return (
    <section className="mt-18 text-center space-y-4 px-6">
      <Text variant="heading">{heading}</Text>
      <Text variant="muted">{subheading}</Text>
      <div className="flex p-4 gap-6 flex-col sm:flex-row justify-center items-center">
        {steps.map((step) => {
          return (
            <div key={step.id} className="relative ">
              <img src={step.imageSrc} className="rounded-lg" />
              <div className="absolute bottom-10 right-[45%] sm:bottom-14 lg:bottom-10 md:right-[40%] lg:right-[44%] bg-white w-12 h-12 rounded-full p-2 flex  items-center justify-center">
                <div className="bg-black w-6 h-6 flex items-center justify-center text-white text-sm rounded-full">
                  {step.id}
                </div>
              </div>

              <Text className="pt-4">{step.title}</Text>
              <Text variant="muted">{step.description}</Text>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
