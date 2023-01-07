import "./styles.css";

import ContainerHeader from "./ContainerHeader";
import ContainerBody from "./ContainerBody";

const TranslatorContainer = () => {
  return (
    <div className="container">
      <ContainerHeader fromLang={"pt"} toLang={"en"} />
      <ContainerBody />
    </div>
  );
};

export default TranslatorContainer;
