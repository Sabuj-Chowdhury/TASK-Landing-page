const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-6 md:px-0 max-w-5xl mx-auto text-white preahvihear-regular text-center md:text-left">
      <div className="w-full md:max-w-lg">
        <h2 className="text-3xl font-bold leading-tight">
          <span>Cont</span>
          <br className="hidden md:block" />
          <span className="ml-0 md:ml-4">act</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-md mx-auto md:mx-0">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. Or have a project
          in mind? Let's connect.
        </p>
        <p className="mt-4 text-lg font-medium text-gray-400">
          ibrahimmemon930@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
