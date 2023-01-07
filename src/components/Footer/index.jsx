import "./styles.css";

const Footer = () => (
  <footer>
    <span>
      feito por{" "}
      <a
        href="https://github.com/jeffreyalvr"
        target="_blank"
        rel="noopener noreferrer"
        title="Clique para abrir o meu GitHub"
      >
        @jeffreyalvr
      </a>
    </span>
    <p className="disclaimer">
      Todas as traduções são realizadas pela API{" "}
      <a
        href="https://libretranslate.com/docs/#/"
        target="_blank"
        rel="noopener noreferrer"
        title="Clique para abrir a documentação da API"
      >
        LibreTranslate
      </a>
      .
    </p>
  </footer>
);

export default Footer;
