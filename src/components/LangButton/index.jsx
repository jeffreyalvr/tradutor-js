import "./styles.css";

import { useState } from "react";

import arrow from "../../assets/images/down-arrow.png";

const LangButton = ({
  languages,
  code,
  setFromLang,
  setToLang,
  isFromMethod,
}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleChangeLanguage = (isFromMethod, lang) => {
    isFromMethod ? setFromLang(lang) : setToLang(lang);
    handleClick();
  };

  const getLanguageName = (arr, code) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].code === code) {
        return arr[i].name;
      }
    }
    return null;
  };

  return (
    <>
      <button onClick={handleClick} className={active ? "active" : undefined}>
        {getLanguageName(languages, code)}
        <img src={arrow} className={active ? "active" : undefined} />
      </button>

      {active ? (
        <div className="dropdown" onMouseLeave={handleClick}>
          <ul>
            {languages.map((lang, index) => (
              <li
                key={index}
                onClick={() => handleChangeLanguage(isFromMethod, lang.code)}
              >
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default LangButton;
