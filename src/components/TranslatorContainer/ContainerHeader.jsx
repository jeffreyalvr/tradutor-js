import LangButton from "../LangButton";

const ContainerHeader = ({
  fromLang,
  setFromLang,
  toLang,
  setToLang,
  languages,
}) => {
  return (
    <div className="container-header">
      <div className="header-item">
        <p>Idioma origem</p>
        <LangButton
          languages={languages}
          code={fromLang}
          setFromLang={setFromLang}
          isFromMethod={true}
        />
      </div>

      <div className="header-item">
        <p>Idioma destino</p>
        <LangButton languages={languages} code={toLang} setToLang={setToLang} />
      </div>
    </div>
  );
};

export default ContainerHeader;
