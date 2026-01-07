import React from 'react'
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  const { t, i18n } = useTranslation();
  AOS.init();
  return (
    <div className="text-[#fff] grid-rows-9 justify-start gap-2 mt-20">
      {/* Titulo */}
      <p className="text-[20px] md:text-[28px] font-medium mt-2 text-start">
        {t("title_body")}
      </p>

      {/* Experience */}
      <ul className="flex w-auto mx-10 gap-10 mt-10 flex-col">
        {/* Experience N° 1 */}
        <section className="grid w-full grid-cols-2 items-center justify-center transition-all duration-200 border-white">
          <div>
            <p className="text-[20px] md:text-[28px] font-medium text-start">
              {t("experience_date_1")}
            </p>
            <p className="text-[15px] md:text-[20px] font-light text-start">
              {t("experience_cargo_1")}
            </p>
            <p className="text-[10px] md:text-[14px] text-[#8D95A6] font-light text-start">
              {t("experience_company_1")}
            </p>
          </div>
            <p className="text-[#8D95A6] text-[10px] md:text-[14px] font-light text-justify">
              {t("experience_description_1")}
            </p>
        </section>
        {/* Experience N° 2 */}
        <section className="grid w-full grid-cols-2 items-center justify-center transition-all duration-200 border-white">
          <div>
            <p className="text-[20px] md:text-[28px] font-medium text-start">
              {t("experience_date_2")}
            </p>
            <p className="text-[15px] md:text-[20px] font-light text-start">
              {t("experience_cargo_2")}
            </p>
            <p className="text-[10px] md:text-[14px] text-[#8D95A6] font-light text-start">
              {t("experience_company_2")}
            </p>
          </div>
            <p className="text-[10px] md:text-[14px] text-[#8D95A6] font-light text-justify">
              {t("experience_description_2")}
            </p>
        </section>
        {/* Experience N° 3 */}
        <section className="grid w-full grid-cols-2 items-center justify-center transition-all duration-200 border-white">
          <div>
            <p className="text-[20px] md:text-[28px] font-medium text-start">
              {t("experience_date_3")}
            </p>
            <p className="text-[15px] md:text-[20px] font-light text-start">
              {t("experience_cargo_3")}
            </p>
            <p className="text-[10px] md:text-[14px] text-[#8D95A6] font-light text-start">
              {t("experience_company_3")}
            </p>
          </div>
            <p className="text-[#8D95A6] text-[10px] md:text-[14px] font-light text-justify">
              {t("experience_description_3")}
            </p>
        </section>
        {/* Experience N° 4 */}
        <section className="grid w-full grid-cols-2 items-center justify-center transition-all duration-200 border-white">
          <div>
            <p className="text-[20px] md:text-[28px] font-medium text-start">
              {t("experience_date_4")}
            </p>
            <p className="text-[15px] md:text-[20px] font-light text-start">
              {t("experience_cargo_4")}
            </p>
            <p className="text-[#8D95A6] text-[10px] md:text-[14px] font-light text-start">
              {t("experience_company_4")}
            </p>
          </div>
            <p className="text-[#8D95A6] text-[10px] md:text-[14px] font-light text-justify">
              {t("experience_description_4")}
            </p>
        </section>
      </ul>
    </div>
  )
}

export default Experience