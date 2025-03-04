import pic1 from "../assets/frame1.svg";
import pic2 from "../assets/frame2.svg";

const Reviews = () => {
  return (
    <section className="relative max-w-5xl mx-auto mt-24 py-20 md:py-40 text-white poppins-semibold">
      {/* Project Container */}
      <div className="flex flex-col gap-20 items-center justify-center relative">
        {/* First Project Card */}
        <div className="relative flex flex-col md:flex-row items-center gap-10">
          {/* Background Glow */}
          <div className="absolute -top-10 left-10 w-96 h-96 bg-purple-700 opacity-50 blur-[100px]"></div>

          {/* Project Image */}
          <div className="relative z-10">
            <img src={pic1} alt="Project 1" className="rounded-lg shadow-lg" />
          </div>

          {/* Project Info with Gradient Overlay */}
          <div className="relative z-10 p-6 rounded-lg shadow-xl max-w-md bg-gradient-to-r from-[#472066] via-[#1a1a2e] to-[#0a0215] ">
            <p className="text-purple-400 text-sm font-medium">Featured</p>
            <h2 className="text-2xl">Example Project</h2>
            <p className="text-gray-300 text-sm mt-2">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
        </div>

        {/* Second Project Card */}
        <div className="relative flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Background Glow */}
          <div className="absolute -top-10 right-10 w-96 h-96 bg-purple-700 opacity-50 blur-[100px]"></div>

          {/* Project Image */}
          <div className="relative z-10">
            <img src={pic2} alt="Project 2" className="rounded-lg shadow-lg" />
          </div>

          {/* Project Info with Gradient Overlay */}
          <div className="relative z-10 p-6 rounded-lg shadow-xl max-w-md bg-gradient-to-r from-[#472066] via-[#1a1a2e] to-[#0a0215] ">
            <p className="text-purple-400 text-sm font-medium">Featured</p>
            <h2 className="text-2xl text-white">Example Project</h2>
            <p className="text-gray-300 text-sm mt-2">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
