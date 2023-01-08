import "./styles.css";

import { useState, useEffect } from "react";

import ContainerHeader from "./ContainerHeader";
import ContainerBody from "./ContainerBody";

import api from "../../services/api";

const TranslatorContainer = () => {
  const [languages, setLanguages] = useState([]);
  const [fromLang, setFromLang] = useState("pt");
  const [toLang, setToLang] = useState("en");

  useEffect(() => {
    api
      .get("/languages")
      .then((response) => setLanguages(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <ContainerHeader
        fromLang={fromLang}
        setFromLang={setFromLang}
        toLang={toLang}
        setToLang={setToLang}
        languages={languages}
      />
      <ContainerBody />
    </div>
  );
};

export default TranslatorContainer;
