import React from 'react'
import { useTranslation } from "react-i18next";

import fondo_code from "../assets/fondo_code.svg";
import fondo_code2 from "../assets/fondo_code2.svg";
import fondo_code3 from "../assets/fondo_code3.svg";
import fondo_code4 from "../assets/fondo_code4.png";
import AOS from "aos";

function Body() {
  const { t, i18n } = useTranslation();
  AOS.init();
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-20 text-white">
      {/* Proyecto 1 */}
      <section
        data-aos="fade-up-right"
        data-aos-duration="2300"
        className="w-full relative max-h-[600px] h-auto row-span-2 bg-[#23272F] flex flex-col items-center justify-end rounded-[20px] p-[20px]"
      >
        <span className="pointer-events-none absolute top-[15px] right-[20px]">
          <img src={fondo_code} className="h-[500px] rounded-[20px]" />
        </span>
        <p className="w-full text-[27px] font-medium text-start">
          {t("proyect_main_1")}
        </p>
        <p className="text-[14px] font-light">
          {t("proyect_main_1_description")}
        </p>
      </section>
      {/* Proyecto 2*/}
      <section
        data-aos="fade-up-left"
        data-aos-duration="2300"
        className="w-full max-h-[300px] bg-[#23272F] flex flex-col items-center rounded-[20px] px-[20px] py-[15px]"
      >
        <p className="w-full text-[28px] font-medium mt-2 text-start">
          {t("proyect_main_2")}
        </p>
        <p className="text-[14px] font-light">
          {t("proyect_main_2_description")}
        </p>
        <span className="pointer-events-none">
          <img className="w-full" src={fondo_code2} />
        </span>
      </section>
      {/* Proyecto 3 */}
      <section
        data-aos="fade-up-left"
        data-aos-duration="1500"
        className="w-full relative max-h-[300px] col-start-2 bg-[#23272F] flex flex-col items-center rounded-[20px] p-[20px]"
      >
        <p className="w-full text-[28px] font-medium mt-2 text-start z-50">
          {t("proyect_main_3")}
        </p>
        <p className="text-[14px] font-light z-50">
          {t("proyect_main_3_description")}
        </p>
        <span className="w-full pointer-events-none absolute top-[20px] bottom-[20px]">
          <img className="w-full h-full" src={fondo_code3} />
        </span>
      </section>
      {/* Proyecto 4 */}
      <section
        data-aos="fade-up-right"
        data-aos-duration="1000"
        className="w-full bg-[#23272F] max-h-[400px] relative col-span-2 row-start-3 flex flex-col items-center justify-end rounded-[20px] overflow-hidden p-[20px]"
      >
        <p className="w-full text-[28px] font-medium text-start z-50">
          {t("proyect_main_4")}
        </p>
        <p className="text-[16px] font-light z-50">
          {t("proyect_main_4_description")}
        </p>
        <div className="bg-[#ffffff] w-full h-full flex absolute top-0 left-0 bg-cover justify-center items-center">
          <img src={fondo_code4} className="w-full h-full brightness-50" />
        </div>
      </section>
    </div>
  )
}

export default Body