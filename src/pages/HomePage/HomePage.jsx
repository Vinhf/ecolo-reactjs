import CarouselSlide from "../../components/Customer/Carousel/CarouselSlide.jsx";
import Product from "../../components/Customer/Product/Product.jsx";
import Header from "../../components/Header/Header.jsx";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container mt-5 pt-5">
        <CarouselSlide />
      </div>

      <div className="" style={{ marginTop: "100px" }}>
        <Product />
      </div>
    </div>
  );
}

export default HomePage;
