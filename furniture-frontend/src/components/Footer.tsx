import Text from "./ui/text";
import { InstagramImg } from "../utils/constant";

const Footer = () => {
  return (
    <footer className="bg-[#03344F] text-white bottom-0 left-0 right-0 h-[200px] md:h-[386px] px-6 py-8 md:px-10 md:py-12">
      <div className="max-w-7xl mex-auto flex justify-between w-full h-full">
        <div className=" w-[30%] flex flex-col justify-between">
          <Text className="md:text-4xl">Beauty Care</Text>
          <Text
            variant="muted"
            className="max-sm:leading-3  md:leading-16 md:text-xl md:mr-8"
          >
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
          <Text className="md:text-4xl">Follow Us</Text>
        </div>
        <div className="pl-6 w-[70%] md:text-4xl">
          <Text>Instagram Shop</Text>
          <div className="flex gap-4 mt-6">
            {InstagramImg.map((img) => {
              return (
                <div key={img.id}>
                  <img src={img.image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
