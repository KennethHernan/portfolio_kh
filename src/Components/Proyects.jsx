import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import icon_flecha from "../assets/icon_flecha2.svg";
import { useState } from "react";

function Proyects({ proyect }) {
  const { t, i18n } = useTranslation();
  AOS.init();

  return (
    <div className="text-[#fff] grid-rows-9 justify-start gap-2 mt-20">
      {/* Titulo */}
      <p className="text-[20px] md:text-[28px] font-medium mt-2 text-start">
        {t("title_body")}
      </p>

      {/* Proyectos */}
      <ul className="flex w-auto mx-5 md:mx-10 mt-5 flex-col">
        {/* Proyecto N° 1 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect9")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>VS Code</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>CSS3</li>
              <li>Expo</li>
              <li>Firebase RealTime DataBase</li>
            </ul>
          </div>
          <button onClick={() => proyect(9)}  className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 2 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect1")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>Android Studio</li>
              <li>Java</li>
              <li>Node.js</li>
              <li>Firebase RealTime DataBase</li>
            </ul>
          </div>
          <button onClick={() => proyect(1)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 3 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect2")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>Android Studio</li>
              <li>Java</li>
              <li>SQLite</li>
            </ul>
          </div>
          <button onClick={() => proyect(2)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 4 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect4")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>Visual Studio</li>
              <li>C#</li>
              <li>.NET</li>
              <li>SQL Server</li>
            </ul>
          </div>
          <button onClick={() => proyect(4)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 5 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect5")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>VS Code</li>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Vercel</li>
            </ul>
          </div>
          <button onClick={() => proyect(5)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 6 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect8")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>VS Code</li>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Vercel</li>
              <li>Firebase RealTime DataBase</li>
            </ul>
          </div>
          <button onClick={() => proyect(8)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 7 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect3")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>VS Code</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Node JS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <button onClick={() => proyect(3)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 8 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect6")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>VS Code</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Node JS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <button onClick={() => proyect(6)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>

        {/* Proyecto N° 9 */}
        <section className="flex w-full justify-between hover:border-y-[.5px] py-3 transition-all duration-200  border-white">
          <div>
            <p className="text-[15px] md:text-[20px] font-medium mt-2 text-start">
              {t("proyect7")}
            </p>
            <ul className="text-[10px] md:text-[14px] flex gap-4 text-[#8D95A6] font-light">
              <li>VS Code</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Node JS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <button onClick={() => proyect(7)} className="flex justify-center items-center text-[9px] md:text-[13px] gap-5 hover:opacity-80">
            {t("see_more")}
            <img src={icon_flecha} alt="Flecha" />
          </button>
        </section>
      </ul>
    </div>
  );
}
export default Proyects;