import Nav from "../../components/Nav";
import TranslatorContainer from "../../components/TranslatorContainer";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <Nav title="Tradutor JS" />
      <TranslatorContainer />
      <Footer />
    </div>
  );
};

export default Home;
