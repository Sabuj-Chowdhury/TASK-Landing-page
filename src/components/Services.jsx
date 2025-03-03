import firstpic from "../assets/Group 2-1.png";
import secondpic from "../assets/Group 1935-1.png";
import thirdpic from "../assets/Group 1938-1.png";
import fouthpic from "../assets/Icons-1.png";

const servicesData = [
  {
    id: 1,
    image: firstpic,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    id: 2,
    image: secondpic,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    id: 3,
    image: thirdpic,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    id: 4,
    image: fouthpic,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
];

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
        Work Experience
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="relative bg-gradient-to-b from-[#2c024b] to-[#1a012f] rounded-2xl p-6 md:p-10 shadow-lg flex items-center space-x-6 transition-transform transform hover:scale-105"
          >
            {/* Icon/Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 md:w-24 md:h-24"
            />

            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                {service.description}
              </p>

              {/* Updated Button */}
              <button className="mt-4 px-6 py-2 border border-purple-400 text-white rounded-full text-sm font-medium transition duration-300 hover:bg-purple-400 hover:text-black">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
