import { useTranslation } from "react-i18next";
import Header from "../Components/Header";
import Skills1 from "../Components/skills1";
import Proyects from "../Components/Proyects";
import linkeding from "../assets/icon_linkedin.svg";
import instagram from "../assets/icon_instagram.svg";
import github from "../assets/icon_github.svg";

import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
function HomePage() {
  const { t, i18n } = useTranslation();
  AOS.init();

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Hi 👋", "I’m Kenneth De La Cruz", "Disfruta tu visita"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      // Destruye la instancia cuando el componente se desmonta
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <section className="select-none h-[80vh] flex flex-col overflow-hidden justify-center">
        <section id="about_me" className="flex flex-col justify-between">
          <div className="min-w-[680px] mt-32 lg:px-60 px-20 text-[60px] text-[#fff] lg:text-[80px] font-bold">
            <p
              className="leading-none"
            >
              <span ref={el} />
            </p>
            <section className="flex gap-[10px] items-center -mt-7 md:-mt-2 text-[#CBACF9]">
              <div className="text-[40px] font-bold">
                <p data-aos="fade-right" data-aos-duration="2000">
                  Back- end
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2300"
                  className="-mt-6"
                >
                  Front-end
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="2300"
                className="bg-[#CBACF9] w-[7px] h-[70px] mt-1"
              ></div>
              <p data-aos="fade-left" data-aos-duration="2300">
                Developer
              </p>
            </section>
            <p className="mt-3 text-[20px] font-normal">{t("description")}</p>
          </div>
        </section>
      </section>
      <Skills1 />
      <section
        id="proyects"
        className="select-none flex justify-center items-center mt-5"
      >
        <Proyects />
      </section>
      <section className="h-[100vh] flex flex-col justify-center items-center text-[#6D6D6E]">
        <div className="text-[80px] font-bold flex gap-3">
          <p>{t("contact_des1")}</p>
          <p className=" text-[#ffffff]">{t("contact_des2")}</p>
        </div>
        <p className="-mt-4 text-[20px]">{t("contact_description")}</p>
        <a
          href="https://wa.me/952304548"
          target="_blank"
          className="text-[#fff] hover:bg-white hover:text-black transition-colors duration-300 text-[20px] mt-10 border rounded-md px-[50px] py-[20px]"
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
                alt=""
                className="w-[50px] hover:invert hover:brightness-0 transition-all duration-300"
              />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-duration="2300">
            <a href="https://www.instagram.com/kennethdr_/" target="_blank">
              <img
                src={instagram}
                alt=""
                className="w-[50px] hover:invert hover:brightness-0 transition-all duration-300"
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
                alt=""
                className="w-[50px] hover:invert hover:brightness-0 transition-all duration-300"
              />
            </a>
          </li>
        </ul>
      </section>

      <footer
        id="contact_me"
        className="h-[100px] font-medium flex gap-2 justify-center items-center text-[#fff]"
      >
        <p className="text-[#6D6D6E]">{t("foot")}</p>
        <p>{t("foot2")}</p>
      </footer>
    </>
  );
}

export default HomePage;
