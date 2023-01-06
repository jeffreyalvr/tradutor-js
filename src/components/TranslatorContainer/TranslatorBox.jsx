const TranslatorBox = ({ fromLang, toLang, label }) => {
  return (
    <div className="box">
      <p>
        {label} <tag>{fromLang || toLang}</tag>
      </p>
      <textarea placeholder="texto..." />
    </div>
  );
};

export default TranslatorBox;
