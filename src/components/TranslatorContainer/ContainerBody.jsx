import TranslatorBox from "./TranslatorBox";

const ContainerBody = () => {
  return (
    <div className="container-body">
      <TranslatorBox placeholder="Digite algo para traduzir..." />
      <TranslatorBox readOnly={true} placeholder="Tradução" />
    </div>
  );
};

export default ContainerBody;
