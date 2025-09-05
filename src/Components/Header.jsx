import Logo from "../assets/kh..svg";
import en from "../assets/en.svg";
import es from "../assets/es.svg";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useRef } from "react";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  const { t, i18n } = useTranslation();
  const [idioma, setIdioma] = useState("");

  // Guardar idioma seleccionada en el local storage

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    console.log("savedLanguage", savedLanguage);

    if (savedLanguage) {
      setIdioma(savedLanguage);
    } else {
      setIdioma("es");
    }
  }, []);

  useEffect(() => {
    if (idioma) {
      i18n.changeLanguage(idioma);
      localStorage.setItem("i18nextLng", idioma);
    }
    setDropdownOpen(false);
  }, [idioma, i18n]);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section className="text-[#6D6D6E] text-md mt-8 px-48 flex items-center justify-between font-medium">
      <img src={Logo} className="w-[100px]" />
      <div className="flex gap-[30px] items-center">
        <a
          href="#about_me"
          className="hover:text-white transition-colors duration-300"
        >
          {t("About")}
        </a>
        <a
          href="#proyects"
          className="hover:text-white transition-colors duration-300"
        >
          {t("Proyects")}
        </a>
        <a
          href="#contact_me"
          className="hover:text-white transition-colors duration-300"
        >
          {t("Contact")}
        </a>
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              ref={trigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center justify-center gap-2 rounded-lg py-2 px-1 text-base font-medium text-dark dark:border-[#6D6D6E] dark:bg-[#000000] dark:text-[#6D6D6E]"
            >
              {idioma}
              <span
                className={`mt-1 duration-100 ${
                  dropdownOpen ? "-scale-y-100" : ""
                }`}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 23 23"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute right-0 top-full mt-3.5  w-[240px] divide-y divide-stroke overflow-hidden rounded-lg bg-white dark:divide-[#6D6D6E] dark:bg-[#000000] ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-dark dark:text-[#6D6D6E]">
                  {t("TitleLenguage")}
                </p>
              </div>
              <div>
                <button
                  onClick={() => setIdioma("en")}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-[#6D6D6E] dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    {t("English")}
                  </span>
                </button>
                <button
                  onClick={() => setIdioma("es")}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-[#6D6D6E] dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    {t("Spanish")}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
