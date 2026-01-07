import coverProyect4 from "../../assets/coverProyect4.png";

import microsoftvs from "../../assets/icon_microsoftVS.svg";
import c from "../../assets/icon_c.svg";
import netFramework from "../../assets/icon_netFramework.svg";
import microsoftSql from "../../assets/icon_misrosoftsql.svg";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
function Proyect4() {
  const { t, i18n } = useTranslation();
  AOS.init();
  return (
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
  )
}

export default Proyect4