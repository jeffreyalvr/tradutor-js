import Button from "./Button";

const ContainerHeader = ({ fromLang, toLang }) => {
  return (
    <div className="container-header">
      <div className="header-item">
        <p>Idioma origem</p>
        <Button isFromMethod={true} lang={fromLang} />
      </div>

      <div className="header-item">
        <p>Idioma destino</p>
        <Button isFromMethod={false} lang={toLang} />
      </div>
    </div>
  );
};

export default ContainerHeader;
