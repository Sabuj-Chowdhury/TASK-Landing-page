import avatar from "../assets/Me.png";
import vector from "../assets/Vector.png";
import circleHighlight from "../assets/Ellipse 5-5.png";
import fb from "../assets/icons8-facebook.svg";

const Banner = () => {
  return (
    <section className="relative max-w-5xl mx-auto py-20 md:py-40 text-white preahvihear-regular">
      <div className="absolute top-5 left-28 md:top-24 md:left-40 flex ">
        <img src={vector} alt="Arrow" className="w-16 mt-2" />
        <p>
          Hello! I am{" "}
          <span className="text-purple-400 font-semibold">Ibrahim Memon</span>
        </p>
      </div>

      <div className="relative flex  items-center ">
        {/* Gradient Behind Avatar */}

        <div className="absolute bottom-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50"></div>

        {/* Avatar */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-40 h-40 rounded-full shadow-lg relative z-10"
        />

        <div>
          <h1 className="text-4xl">
            <span className="text-xs font-normal"> A Designer who</span> <br />{" "}
            Judges a book
            <br /> by its{" "}
            <span className="relative inline-block text-purple-700">
              cover
              <img
                src={circleHighlight}
                alt="Highlight"
                className="absolute bottom-1 left-0 w-full"
              />
            </span>
            ...
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-lg">
            Because if the cover does not impress you, what else can?
          </p>
        </div>
      </div>

      <div className="md:w-2/3 flex flex-col items-center md:items-start mt-10 ">
        {/* Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold mt-10">
          I'm a Software Engineer.|
        </h2>
        <p className="text-lg mt-2">
          Currently, I'm a Software Engineer at{" "}
          <span className="text-blue-400 font-medium">
            <img src={fb} alt="" className="inline-block w-8 h-8" /> Facebook
          </span>
          .
        </p>
        <p className="max-w-2xl text-gray-300 mt-8 ">
          A self-taught UI/UX designer, functioning in the industry for 3+
          years. I create meaningful and delightful digital products that bridge
          user needs and business goals.
        </p>
      </div>
    </section>
  );
};

export default Banner;
