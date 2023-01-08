import Box from "./Box";

const ContainerBody = () => {
  return (
    <div className="container-body">
      <Box placeholder="Digite algo para traduzir..." />
      <Box readOnly={true} placeholder="Tradução" />
    </div>
  );
};

export default ContainerBody;
