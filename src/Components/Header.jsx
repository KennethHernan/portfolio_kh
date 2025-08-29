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

  return (
    <section className="text-[#6D6D6E] text-[18px] mt-8 px-48 flex items-center justify-between">
      <img src={Logo} className="w-[100px]" />
      <div className="flex gap-[30px] items-center">
        <a href="#about_me">{t("About")}</a>
        <a href="#proyects">{t("Proyects")}</a>
        <a href="#contact_me">{t("Contact")}</a>
        <select
          className="w-auto focus:outline-none border-none py-2 px-1 bg-black"
          value={idioma}
          onChange={toggleLanguage}
          required
        >
          <option value="1">es</option>
          <option value="0">
            en
            <img src={es} className="w-[2px]" />
          </option>
        </select>
      </div>
    </section>
  );
}

export default Header;
