import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import Banner from "./components/banner/Index.jsx";
import About from "./components/about/About";
import ChooseUs from "./components/chooseus/ChooseUs";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";
import Industries from "./components/industries/Industries.jsx";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Banner />
      <About />
      <ChooseUs />
      <Service />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
