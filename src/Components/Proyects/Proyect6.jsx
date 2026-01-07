import coverProyect6 from "../../assets/coverProyect6.png";

import node from "../../assets/icon_node.svg";
import visual from "../../assets/icon_visual.svg";
import tailwind from "../../assets/icon_tailwind.svg";
import mongodb from "../../assets/icon_mongodb.svg";
import typescript from "../../assets/icon_typeScript.svg";
import angular from "../../assets/icon_angular.svg";

import { useTranslation } from "react-i18next";

function Proyect6() {
  const { t, i18n } = useTranslation();
  return (
    <section
      className="max-w-[600px] bg-[#23272F] text-white flex flex-col items-center rounded-[20px] px-[20px] py-[20px]"
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
  )
}

export default Proyect6