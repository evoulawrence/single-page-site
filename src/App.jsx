import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import ContactInfo from "./components/contactInfo/ContactInfo";
import Nav from "./components/nav/Nav";
import Product from "./components/product/Product";
import TopBar from "./components/topBar/TopBar";


const App = () => {
  return (
    <div>
      <TopBar />
      <Nav />
      <Banner />
      <About />
      <Product />
      <ContactInfo />
    </div>
  );
};

export default App;