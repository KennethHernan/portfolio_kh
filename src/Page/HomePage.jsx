import { useTranslation } from "react-i18next";
import Header from "../Components/Header";
import Body from "../Components/Body";
import Proyects from "../Components/Proyects";
import Experience from "../Components/Experience"; 

import linkeding from "../assets/icon_linkedin.svg";
import instagram from "../assets/icon_instagram.svg";
import github from "../assets/icon_github.svg";
import profile from "../assets/89922995.png";
import icon_dispositivo from "../assets/dispositivos.svg";
import icon_flecha2 from "../assets/icon_flecha2.svg";
import icon_codigo from "../assets/icon_codigo.svg";
import icon_linkeding from "../assets/icon_linkedin_small.svg";
import icon_instagram from "../assets/icon_instagram_small.svg";
import icon_github from "../assets/icon_github_small.svg";

import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

function HomePage() {
  const { t } = useTranslation();
  AOS.init();

  const el = useRef(null);
  const typed2 = useRef(null);

  useEffect(() => {
    typed2.current = new Typed(el.current, {
      strings: ["Backend Developer", "Frontend Developer", "Web Developer", "Web Design"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed2.current.destroy();
    };
  }, []);
  return (
    <section className="lg:px-40 select-none">
      <Header />
      
      <section className="select-none md:h-[80vh] justify-end flex flex-col overflow-hidden">
        {/* Seccion Movile */}
        <section
          id="about_me"
          className="flex-col justify-between hidden max-md:flex"
        >
          <div className="h-auto flex flex-col items-center mt-20 text-[35px] text-[#fff] font-bold">
            <div className="border-[#fff] border-[4px] rounded-[50%] border-solid p-2 w-[20vh]">
              <img src={profile} alt="Profile" className="rounded-[50%]" />
            </div>
            <p className="h-auto mt-5 leading-none text-center">
              {t("title")}
            </p>
            <p className="text-[#CBACF9]">
              <span ref={el} />
            </p>
            <p className="h-auto mt-3 px-6 text-[16px] text-center sm:text-center font-medium pb-10">
              {t("description")}
            </p>
          </div>
        </section>

        {/* Seccion Desktop */}
        <section
          id="about_me"
          className="flex-row items-start justify-between hidden md:flex"
        >
          {/* Description */}
          <div className="lg:px-50 font-extralight text-[30px] md:text-[50px] text-[#fff] lg:text-[60px] flex flex-col items-center md:items-start">
            <p className="leading-none text-[10px]  md:text-[30px] lg:text-[40px]">
              {t("title")}
            </p>
            <p className="leading-none">
              {t("title2")}
            </p>
            <p className="leading-none">
              {t("title3")}
            </p>
            <section className="flex gap-[10px] items-center font-bold text-[#CBACF9] text-[50px] md:text-[80px] lg:text-[90px]">
              <p className="leading-none">
                {t("title4")}
              </p>
            </section>

            <p className="leading-none text-[10px] my-3 md:text-[30px] lg:text-[20px]">
              {t("rubro")}
            </p>

            <div className="my-3">
              <span className="pointer-events-none">
                <img src={icon_dispositivo} alt="dispositivos" />
              </span>
            </div>

            <p className=" max-w-[100vh] mt-3 text-[16px] mr-[10em] md:text-[20px] text-center sm:text-start">
              {t("description")}
            </p>
            <section className="flex gap-5 items-center mt-7">
              <button className="border-[1px] border-white rounded-[50px] py-3 px-5 hover:opacity-70">
                <div className="flex flex-row items-center gap-5 text-[16px]">
                  <span className="pointer-events-none">
                    <img src={icon_codigo} alt="" />
                  </span>
                  Descargar CV
                  <span className="pointer-events-none">
                    <img src={icon_flecha2} alt="" />
                  </span>
                </div>
              </button>
              <a
                href="https://www.linkedin.com/in/kenneth-de-la-cruz-romero-730833357?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuSr2JEE8RwyByfDBWC1Otg%3D%3D"
                target="_blank"
                className="border-[1px] p-4 rounded-[50px]"
              >
                <span className="pointer-events-none">
                  <img src={icon_linkeding} alt="linkendi" />
                </span>
              </a>

              <a
                href="https://github.com/KennethHernan"
                target="_blank"
                className="border-[1px] p-4 rounded-[50px]"
              >
                <span className="pointer-events-none">
                  <img src={icon_github} alt="linkendi" />
                </span>
              </a>

              <a
                href="https://www.instagram.com/kennethdr_/"
                target="_blank"
                className="border-[1px] p-4 rounded-[50px]"
              >
                <span className="pointer-events-none">
                  <img src={icon_instagram} alt="linkendi" />
                </span>
              </a>
            </section>
          </div>
          {/* Imagen Perfil */}
          <div className="border-[#fff] border-[4px] rounded-[50%] border-solid p-3">
            <img src={profile} alt="Profile" className=" rounded-[50%]" />
          </div>
        </section>
      </section>
      
      <Body />
      
      {/* Mis proyectos destacados */}
      <section
        id="proyects"
      >
        <Proyects />
      </section>
      
      <Experience/>

      {/* Cuerpo */}
      <section className="h-[100vh] flex flex-col justify-center items-center text-[#6D6D6E]">
        <div className="text-[40px] md:text-[80px] font-bold flex gap-3">
          <p>{t("contact_des1")}</p>
          <p className=" text-[#ffffff]">{t("contact_des2")}</p>
        </div>
        <p className="-mt-2 md:-mt-4 text-[14px] md:text-[20px]">
          {t("contact_description")}
        </p>
        <a
          href="https://wa.me/952304548"
          target="_blank"
          className="text-[#fff] hover:bg-white hover:text-black transition-colors duration-300 text-[15px] md:text-[20px] mt-10 border rounded-md px-[30px] md:px-[50px] py-[15px] md:py-[20px]"
        >
          {t("contat_button")}
        </a>

        <ul className="flex gap-16 mt-24">
          <li data-aos="fade-up" data-aos-duration="2000">
            <a
              href="https://www.linkedin.com/in/kenneth-de-la-cruz-romero-730833357?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuSr2JEE8RwyByfDBWC1Otg%3D%3D"
              target="_blank"
            >
              <img
                src={linkeding}
                alt="Linkending"
                className="w-[35px] md:w-[50px] hover:invert hover:brightness-0 transition-all duration-300"
              />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-duration="2300">
            <a href="https://www.instagram.com/kennethdr_/" target="_blank">
              <img
                src={instagram}
                alt="Intagram"
                className="w-[35px] md:w-[50px] hover:invert hover:brightness-0 transition-all duration-300"
              />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-duration="2600">
            <a
              href="https://github.com/KennethHernan"
              target="_blank"
              className="hover:fill-white fill-[#6D6D6E] transition-all duration-300"
            >
              <img
                src={github}
                alt="Github"
                className="w-[35px] md:w-[50px] hover:invert hover:brightness-0 transition-all duration-300"
              />
            </a>
          </li>
        </ul>
      </section>

      {/* Pie */}
      <footer
        id="contact_me"
        className="h-[100px] font-medium flex gap-1 md:gap-2 text-[12px] md:text-[16px] justify-center items-center text-[#fff]"
      >
        <p className="text-[#6D6D6E]">{t("foot")}</p>
        <p>{t("foot2")}</p>
      </footer>
    </section>
  );
}

export default HomePage;
