import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <body className="bg-[#11071f] text-white ">
      {/* Navbar */}

      <Navbar />

      <main>
        <Banner />
        <Services />
        <Products />
        <Reviews />
        <Footer />
      </main>
    </body>
  );
}

export default App;
