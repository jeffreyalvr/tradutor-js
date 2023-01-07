const TranslatorBox = ({ readOnly, placeholder }) => {
  return (
    <div className="box">
      <textarea readOnly={readOnly} placeholder={placeholder} />
    </div>
  );
};

export default TranslatorBox;
