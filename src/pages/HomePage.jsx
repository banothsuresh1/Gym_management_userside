import Carousel from "./Carousel";
import Equipments from "./Equipments";
import Footer from "./Footer";
import Welcome from "./Welcome";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />
      <Welcome />
      <Equipments />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;
