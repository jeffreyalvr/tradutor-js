import "./styles.css";

import TranslatorBox from "./TranslatorBox";

const TranslatorContainer = ({ fromLang, toLang }) => {
  return (
    <>
      <TranslatorBox label="Idioma origem" fromLang={fromLang} />
      <TranslatorBox label="Idioma destino" toLang={toLang} />
    </>
  );
};

export default TranslatorContainer;
