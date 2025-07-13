"use client";

import { useEffect, useState } from "react";
import "../../styles/_info.scss"
import Proyects from "./proyetcs";
import Stack from "./stack";
import showDetails from "./details";


export default function Portfolio(){
   const [cursor, setCursor] = useState("/picaxe.png"); // cursor normal
   const text = "<Full Stack Developer/>"

   const [hasRun, setHasRun] = useState(false);

   const redirect = ( path )=>{
    window.location.href = path
   }

 useEffect(() => {
  if (hasRun) return;
  setHasRun(true);

  const typeWriter = (word, classN) => {
    const quantity = word.length;
    for (let i = 0; i <= quantity; i++) {
      setTimeout(() => {
        const nombre = document.getElementsByClassName(classN)[0];
        if (nombre) {
          const actualLetter = word[i];
          if (actualLetter !== undefined) {
            nombre.innerHTML += actualLetter;
          }
        }
      }, 50 * i);
    }
  };

  typeWriter(
    "Ofrezco mis conocimientos en programación y ciberseguridad para convertirme en un pilar importante de su equipo.",
    "details"
  );
}, [hasRun]);

   const handleClick = () => {
    setCursor("/picaxe_click.PNG"); // cursor al hacer clic

     // Volver al original después de 150 ms
     setTimeout(() => {
       setCursor("/picaxe.png");
     }, 150);
   };


   useEffect(() => {
    const cvClick = () => {
      const cv = document.getElementsByClassName("paper")[0];
      if (cv) {
        cv.addEventListener("click", () => {
          window.open("/cv_alonso.pdf");
        });
      }
    };
    cvClick();
  
    // Opcional: limpiar listener al desmontar
    return () => {
      const cv = document.getElementsByClassName("paper")[0];
      if (cv) cv.removeEventListener("click", () => window.open("/cv_alonso.pdf", "_blank"));
    }
  }, []);


    return(
<div
  className="gl"
  onMouseDown={handleClick}
  style={{
    cursor: `url(${cursor}), auto`,
    width: "100%",
    backgroundImage: "url(https://i.pinimg.com/736x/61/c8/57/61c85711c4cf90c6ac3bd605b192c94f.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left",
    position: "relative", // necesario para overlay
    overflow: "hidden",
  }}
>
  {/* Capa oscura encima del fondo */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)", // oscurece solo el fondo
      zIndex: 1,
    }}
  ></div>

  {/* Contenido por encima */}
  <div style={{ position: "relative", zIndex: 2 }}>
    <div className="nav">
     <button className="button_contact">
      <p>Contactar</p>
      <img src="/brujula.png"></img>
     </button>
     <button className="button_about_me">
      <p>Sobre Mi</p>
      <img src="/totem.png"></img>
     </button>
    </div>
    <div className="data_cont" style={ { display: "flex" } }>
     <img className="avatar" style={ { filter: "brightness(80%)" } } src="/avatar.png" />
     <div className="info">
      <h1>Martín Alonso</h1>
      <h2>{ text }</h2>
      <p className="details"></p>
      <div className="icons">
        <div className="icon_cont">
         <img onClick={ ()=>{ redirect("https://www.linkedin.com/in/martín-alonso-b3560a266") } } className="icon" src="/esmerald.png"></img>
         <p>Linkedin</p>
        </div>
        <div className="icon_cont">
         <img onClick={ ()=>{ redirect("https://github.com/Erilaz0") } } className="icon" src="/cat.png"></img>
         <p>Github</p>
        </div>
        <div className="icon_cont">
         <img onClick={ showDetails } className="icon" src="/star.png"></img>
         <p onClick={ showDetails }>Logros</p>
        </div>
        <div className="icon_cont">
         <img className="icon paper" src="/paper.png"></img>
         <a href="/cv_alonso.pdf" download="cv_alonso.pdf">CV</a>
        </div>
      </div>
     </div>
    </div>
    <Stack/>
    <Proyects/>
  </div>
</div>
    )
}