import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/Rectangle 3.svg";
import four from "../assets/Rectangle 4.svg";
import five from "../assets/Rectangle 5.png";
import six from "../assets/Rectangle 6.svg";
import seven from "../assets/Rectangle 7.svg";
import eight from "../assets/Rectangle 8.svg";
import nine from "../assets/Rectangle 9.svg";
import ten from "../assets/Rectangle 10.png";
import eleven from "../assets/Rectangle 11.svg";
import twelve from "../assets/Rectangle 12.svg";
import thirteen from "../assets/Rectangle 13.svg";
import sigma from "../assets/Group 1897.svg";
import circle1 from "../assets/Ellipse 23.svg";
import circle2 from "../assets/Ellipse 22.svg";
import circle3 from "../assets/Ellipse 23.svg";

const Products = () => {
  return (
    <section
      id="support"
      className="relative max-w-5xl mx-auto py-20 md:py-40 text-white preahvihear-regular"
    >
      {/* Text */}
      <div className=" flex flex-col items-center justify-center  text-center  py-5">
        <p className="text-2xl md:text-3xl font-semibold">
          I'm currently looking to join a{" "}
          <span className="text-purple-400">cross-functional</span> team
        </p>
        <p className="text-sm md:text-base text-gray-400 mt-2">
          that values improving people's lives through accessible design
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 mt-5">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
        <img src={six} alt="" />
        <img src={seven} alt="" />
      </div>
      <div className="flex items-center justify-center gap-5 mt-5">
        <img src={eight} alt="" />
        <img src={nine} alt="" />
        <img src={ten} alt="" />
        <img src={eleven} alt="" />
        <img src={twelve} alt="" />
        <img src={thirteen} alt="" />
      </div>

      <div>
        {/* Glowing Central Element */}

        <div className="relative top-36 -right-44 md:top-44 md:left-5/12 flex items-center justify-center w-28 h-28 md:w-44 md:h-44 bg-purple-700 rounded-full shadow-[0_0_100px_rgba(138,43,226,1)]">
          <span className="text-3xl md:text-7xl font-bold text-white">
            <img src={sigma} alt="" className="w-28 h-28 " />
          </span>
        </div>
        <img
          src={circle1}
          className="md:h-60 md:w-96 absolute md:-top--0 md:left-80 "
        />
        <img
          src={circle2}
          alt=""
          className="md:h-60 md:w-[584px] absolute md:-top--0 md:left-56  "
        />
        <img
          src={circle3}
          alt=""
          className="md:h-68 md:w-10/12 absolute md:-top--0 lmd:eft-24  "
        />
      </div>
    </section>
  );
};

export default Products;
