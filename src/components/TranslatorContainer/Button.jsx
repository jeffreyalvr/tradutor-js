import { useState } from "react";

import arrow from "../../assets/images/down-arrow.png";

const Button = ({ isFromMethod, lang }) => {
  const languages = {
    pt: "português",
    fr: "francês",
    es: "espanhol",
    it: "italiano",
    de: "alemão",
    en: "inglês",
    ru: "russo",
    jp: "japonês",
    zh: "chinês",
    kr: "coreano",
  };

  const [active, setActive] = useState(false);
  const [fromLang, setFromLang] = useState("pt");
  const [toLang, setToLang] = useState("en");

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleChangeLanguage = (isFromMethod, lang) => {
    isFromMethod ? setFromLang(lang) : setToLang(lang);
  };

  return (
    <>
      <button onClick={handleClick} className={active ? "active" : undefined}>
        {isFromMethod ? languages[fromLang] : languages[toLang]}
        <img src={arrow} className={active ? "active" : undefined} />
      </button>

      {active ? (
        <div className="dropdown">
          <ul>
            {Object.keys(languages).map((lang, index) => (
              <li
                key={index}
                onClick={() => handleChangeLanguage(isFromMethod, lang)}
              >
                {languages[lang]}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Button;
