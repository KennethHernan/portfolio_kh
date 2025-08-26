import Logo from "../assets/kh..svg";
import en from "../assets/en.svg";
import es from "../assets/es.svg";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const [idioma, setIdioma] = useState("");
  const toggleLanguage = (e) => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
    setIdioma(e.target.value);
  };
  const opciones = [
    {
      value: "en",
      label: (
        <div className="flex items-center gap-2">
          <img src={en} className="w-5" />
          EN
        </div>
      ),
    },
    {
      value: "es",
      label: (
        <div className="flex items-center gap-2">
          <img src={es} className="w-5" />
          ES
        </div>
      ),
    },
  ];

  return (
    <section className="text-[#fff] mt-[10px] px-[50px] flex items-center justify-between">
      <img src={Logo} className="w-[50px]" />
      <div className="flex gap-[20px] items-center">
        <a href="">{t("About")}</a>
        <a href="">{t("Proyects")}</a>
        <a href="">{t("Contact")}</a>
        <a href="">{t("Language")}</a>
        <select
          className="w-[50px] border text-[#636363]  focus:outline-none py-2 px-1"
          value={idioma}
          onChange={toggleLanguage}
          required
        >
          <option value="1">
            
            <img src={en} />
          </option>
          <option value="0">
            es
            <img src={es} className="w-[2px]" />
          </option>
        </select>
        <Select
          options={opciones}
          onChange={(opcion) => setIdioma(opcion.value)}
        />
      </div>
    </section>
  );
}

export default Header;
