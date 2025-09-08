import coverProyect1 from "../assets/coverProyect1.png";
import coverProyect2 from "../assets/coverProyect2.png";
import coverProyect3 from "../assets/coverProyect3.png";
import coverProyect4 from "../assets/coverProyect4.png";
import coverProyect5 from "../assets/coverProyect5.png";
import coverProyect6 from "../assets/coverProyect6.png";
import coverProyect7 from "../assets/coverProyect7.png";
import node from "../assets/icon_node.svg";
import android from "../assets/android.svg";
import firebase from "../assets/icon_firebase.svg";
import java from "../assets/icon_java.svg";
import sqlLite from "../assets/icon_sqlLite.svg";
import visual from "../assets/icon_visual.svg";
import react from "../assets/icon_react.svg";
import tailwind from "../assets/icon_tailwind.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/icon_mongodb.svg";
import microsoftvs from "../assets/icon_microsoftVS.svg";
import c from "../assets/icon_c.svg";
import netFramework from "../assets/icon_netFramework.svg";
import microsoftSql from "../assets/icon_misrosoftsql.svg";
import vite from "../assets/vercel.svg";
import angular from "../assets/icon_angular.svg";
import typescript from "../assets/icon_typeScript.svg";
import flecha from "../assets/icon_flecha.svg";
import privado from "../assets/icon_privado.svg";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
function Proyects() {
  const { t, i18n } = useTranslation();
  AOS.init();

  return (
    <div className="text-[#fff] justify-center grid grid-cols-1 md:grid-cols-2 gap-2">
      <section
        data-aos="fade-up-right"
        data-aos-duration="2300"
        className="max-w-[600px] bg-[#ffffff1a] flex flex-col items-center rounded-[20px] m-3 px-[20px] py-[20px]"
      >
        <div className="bg-[#ffffff0c] rounded-[20px] max-w-[550px] flex justify-center items-center px-[20px] pt-[20px]">
          <img src={coverProyect1} />
        </div>
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect1")}
        </p>
        <p className="text-[16px] font-light">{t("proyect1_des")}</p>
        <ul className="w-full flex gap-4 mt-7 mb-5">
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={android} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={node} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={java} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={firebase} alt="" />
          </li>
        </ul>
      </section>

      <section
        data-aos="fade-up-left"
        data-aos-duration="2500"
        className="max-w-[600px] bg-[#ffffff1a] flex flex-col items-center rounded-[20px] m-3 px-[20px] py-[20px]"
      >
        <div className="bg-[#ffffff0c] rounded-[20px] max-w-[550px] flex justify-center items-center px-[20px] pt-[20px]">
          <img src={coverProyect2} />
        </div>
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect2")}
        </p>
        <p className="text-[16px] font-light">{t("proyect2_des")}</p>
        <ul className="w-full flex gap-4 mt-7 mb-5">
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={android} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={java} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={sqlLite} alt="" />
          </li>
        </ul>
      </section>

      <section
        data-aos="fade-up-right"
        data-aos-duration="2300"
        className="max-w-[600px] bg-[#ffffff1a] flex flex-col items-center rounded-[20px] m-3 px-[20px] py-[20px]"
      >
        <div className="bg-[#ffffff0c] rounded-[20px] max-w-[550px] flex justify-center items-center px-[20px] pt-[83px] relative">
          <img src={coverProyect3} />
          <li className="flex items-center absolute top-5 right-5">
            <img src={privado} alt="Pagina Web Privada" className="w-[30px]" />
          </li>
        </div>
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect3")}
        </p>
        <p className="text-[16px] font-light">{t("proyect3_des")}</p>
        <ul className="w-full flex gap-4 mt-7 mb-5">
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={visual} alt="Visual Studio Code" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={react} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={tailwind} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={javascript} alt="" className="w-[35px]" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={node} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={mongodb} alt="" />
          </li>
        </ul>
      </section>

      <section
        data-aos="fade-up-left"
        data-aos-duration="2500"
        className="max-w-[600px] bg-[#ffffff1a] flex flex-col items-center rounded-[20px] m-3 px-[20px] py-[20px]"
      >
        <div className="bg-[#ffffff0c] rounded-[20px] max-w-[550px] flex justify-center items-center px-[20px] pt-[20px]">
          <img src={coverProyect4} />
        </div>
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect4")}
        </p>
        <p className="text-[16px] font-light">{t("proyect4_des")}</p>
        <ul className="w-full flex gap-4 mt-7 mb-5">
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={microsoftvs} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={c} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={netFramework} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={microsoftSql} alt="" />
          </li>
        </ul>
      </section>

      <section
        data-aos="fade-up-right"
        data-aos-duration="2300"
        className="max-w-[600px] bg-[#ffffff1a] flex flex-col items-center rounded-[20px] m-3 px-[20px] py-[20px]"
      >
        <div className="bg-[#ffffff0c] rounded-[20px] max-w-[550px] flex justify-center items-center px-[20px] pt-[83px] relative">
          <img src={coverProyect5} />
          <li className="flex items-center absolute top-5 right-5">
            <a
              href="https://barberia-shop.vercel.app/"
              target="_blank"
              className="flex gap-2 font-light text-[#A6A6A6]"
            >
              {t("visit")}<img src={flecha} alt="" />
            </a>
          </li>
        </div>
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect5")}
        </p>
        <p className="text-[16px] font-light">{t("proyect5_des")}</p>
        <ul className="w-full flex gap-4 mt-7 mb-5">
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={visual} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={react} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={javascript} alt="" className="w-[35px]" />
          </li>

          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={tailwind} alt="" />
          </li>
          <li className="hover:scale-105 overflow-hidden hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={vite} alt="" />
          </li>
        </ul>
      </section>

      <section
        data-aos="fade-up-left"
        data-aos-duration="2500"
        className="max-w-[600px] bg-[#ffffff1a] flex flex-col items-center rounded-[20px] m-3 px-[20px] py-[20px]"
      >
        <div className="bg-[#ffffff0c] rounded-[20px] max-w-[550px] flex justify-center items-center px-[20px] pt-[83px]">
          <img src={coverProyect6} />
        </div>
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect6")}
        </p>
        <p className="text-[16px] font-light">{t("proyect6_des")}</p>
        <ul className="w-full flex gap-4 mt-7 mb-5">
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={visual} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={angular} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={typescript} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={tailwind} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={node} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={mongodb} alt="" />
          </li>
        </ul>
      </section>

      <section
        data-aos="fade-up-right"
        data-aos-duration="2300"
        className="max-w-[600px] bg-[#ffffff1a] flex flex-col items-center rounded-[20px] m-3 px-[20px] py-[20px]"
      >
        <div className="bg-[#ffffff0c] rounded-[20px] max-w-[550px] flex justify-center items-center px-[20px] pt-[83px] relative">
          <img src={coverProyect7} />
          <li className="flex items-center absolute top-5 right-5">
            <img src={privado} alt="Pagina Web Privada" className="w-[30px]" />
          </li>
        </div>
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect7")}
        </p>
        <p className="text-[16px] font-light">{t("proyect7_des")}</p>
        <ul className="w-full flex gap-4 mt-7 mb-5">
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={visual} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={react} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={javascript} alt="" className="w-[35px]" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={tailwind} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={node} alt="" />
          </li>
          <li className="hover:scale-105 hover:rotate-3 w-[50px] h-[50px] flex justify-center items-center border rounded-[50px] border-[#868686]">
            <img src={mongodb} alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Proyects;
