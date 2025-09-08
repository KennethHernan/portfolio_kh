import React, { use, useEffect, useRef, useState } from "react";
import nodejs from "../assets/nodejs.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescrip.png";
import figma from "../assets/Figma.png";
import tailwind from "../assets/TailwindCSS.svg";
import vscode from "../assets/VSCode.svg";
import github from "../assets/Github.svg";
import react from "../assets/react.png";
import vercel from "../assets/vercel.svg";
import sql from "../assets/sql.svg";
import firebase from "../assets/firebase.svg";
import angular from "../assets/angular.svg";
import mongodb from "../assets/mongodb.svg";
import java from "../assets/java.svg";
import microsoftvs from "../assets/microsoftvs.svg";

function skillsMovile() {
  const sliderRef = useRef(null);
  const sliderRefe = useRef(null);
  const animationRef = useRef(null);

  const skills = [
    { img: nodejs, label: "Node JS" },
    { img: javascript, label: "JavaScript" },
    { img: typescript, label: "Typescript" },
    { img: figma, label: "Figma" },
    { img: tailwind, label: "Tailwind CSS" },
    { img: vscode, label: "Visual Studio Code" },
    { img: github, label: "GitHub" },
    { img: react, label: "React JS" },
    { img: vercel, label: "Vercel" },
    { img: sql, label: "Microsoft SQL Server" },
    { img: firebase, label: "FireBase RealDatatime" },
    { img: angular, label: "Angular" },
    { img: mongodb, label: "Mongo DB" },
    { img: java, label: "Java" },
    { img: microsoftvs, label: "Microsoft Visual Studio" },
  ];

  const skills2 = [
    { img: sql, label: "Microsoft SQL Server" },
    { img: firebase, label: "FireBase RealDatatime" },
    { img: angular, label: "Angular" },
    { img: mongodb, label: "Mongo DB" },
    { img: java, label: "Java" },
    { img: microsoftvs, label: "Microsoft Visual Studio" },
    { img: nodejs, label: "Node JS" },
    { img: javascript, label: "JavaScript" },
    { img: typescript, label: "Typescript" },
    { img: figma, label: "Figma" },
    { img: tailwind, label: "Tailwind CSS" },
    { img: vscode, label: "Visual Studio Code" },
    { img: github, label: "GitHub" },
    { img: react, label: "React JS" },
    { img: vercel, label: "Vercel" },
  ];

  useEffect(() => {
    let pos = 0;
    const slideWidth = sliderRef.current
      ? sliderRef.current.offsetWidth / skills.length
      : 0;
    const interval = setInterval(() => {
      pos += 1;
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${pos}px)`;
        if (pos >= slideWidth * skills.length) {
          pos = 0;
          sliderRef.current.style.transform = `translateX(0px)`;
        }
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let pos = sliderRefe.current ? sliderRefe.current.scrollWidth / 2 : 0;
    let sliderWidth = sliderRefe.current
      ? sliderRefe.current.scrollWidth / 2
      : 0;
    function animate() {
      pos -= 1; // mueve hacia la derecha
      if (pos <= 0) pos = sliderWidth;
      sliderRefe.current.style.transform = `translateX(-${pos}px)`;
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="mb-[50px] select-none w-full flex flex-col text-[#fff] text-[30px] md:hidden">
      <section className="mt-[40px] w-full flex items-center h-auto overflow-hidden text-[#fff] text-[16px]">
        <div
          className="flex gap-[50px]"
          ref={sliderRef}
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            transition: "none",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="ml-10 inline-flex items-center gap-[5px]  rounded-md"
              style={{ marginRight: "30px" }}
            >
              <img src={skill.img} alt={skill.label} className="w-[50px]" />
              <p style={{ whiteSpace: "nowrap" }}>
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[40px] w-full flex items-center h-auto overflow-hidden text-[#fff] text-[16px]">
        <div
          className="flex gap-[50px]"
          ref={sliderRefe}
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            transition: "none",
          }}
        >
          {[...skills2, ...skills2].map((skill, i) => (
            <div
              key={i}
              className="ml-10 inline-flex items-center gap-[5px]  rounded-md"
              style={{ marginRight: "0px" }}
            >
              <img src={skill.img} alt={skill.label} className="w-[50px]" />
              <p style={{ whiteSpace: "nowrap" }}>
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default skillsMovile;
