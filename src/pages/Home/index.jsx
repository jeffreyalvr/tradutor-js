import Nav from "../../components/Nav";
import TranslatorContainer from "../../components/TranslatorContainer";

const Home = () => {
  return (
    <div className="wrapper">
      <Nav title="Tradutor JS" />
      <div className="container">
        <TranslatorContainer fromLang={"pt"} toLang={"en"} />
      </div>
    </div>
  );
};

export default Home;
