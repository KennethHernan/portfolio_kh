import coverProyect7 from "../../assets/coverProyect7.png";

import node from "../../assets/icon_node.svg";
import visual from "../../assets/icon_visual.svg";
import react from "../../assets/icon_react.svg";
import tailwind from "../../assets/icon_tailwind.svg";
import javascript from "../../assets/javascript.svg";
import mongodb from "../../assets/icon_mongodb.svg";
import privado from "../../assets/icon_privado.svg";

import { useTranslation } from "react-i18next";
function Proyect7() {
  const { t, i18n } = useTranslation();

  return (
    <section className="max-w-[600px] bg-[#23272F] text-white flex flex-col items-center rounded-[20px] px-[20px] py-[20px]"
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
  )
}

export default Proyect7