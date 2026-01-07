import React from 'react'
import coverProyect2 from "../../assets/coverProyect2.png";
import android from "../../assets/android.svg";
import java from "../../assets/icon_java.svg";
import sqlLite from "../../assets/icon_sqlLite.svg";

import AOS from "aos";
import "aos/dist/aos.css";
function Proyect2() {
  const { t, i18n } = useTranslation();
  AOS.init();
  return (
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
  )
}

export default Proyect2