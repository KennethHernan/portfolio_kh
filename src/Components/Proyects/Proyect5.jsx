import coverProyect5 from "../../assets/coverProyect5.png";

import visual from "../../assets/icon_visual.svg";
import react from "../../assets/icon_react.svg";
import tailwind from "../../assets/icon_tailwind.svg";
import javascript from "../../assets/javascript.svg";
import vite from "../../assets/vercel.svg";
import flecha from "../../assets/icon_flecha.svg";
import { useTranslation } from "react-i18next";

function Proyect5() {
  const { t, i18n } = useTranslation();
  return (
    <section
      className="max-w-[600px] bg-[#23272F] text-white flex flex-col items-center rounded-[20px] px-[20px] py-[20px]"
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
  )
}

export default Proyect5