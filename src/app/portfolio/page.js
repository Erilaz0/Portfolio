"use client";

import { useEffect, useState } from "react";
import "../../styles/_info.scss"
import Proyects from "./proyetcs";
import Stack from "./stack";
import showDetails from "./details";
import sendEmail from "../handlers/send";
import Swal from 'sweetalert2'
import Me from "./me";


export default function Portfolio(){
   const [cursor, setCursor] = useState("/picaxe.png"); // cursor normal
   const [ image  , setImage ] = useState("/avatar.png")
   const [hasRun, setHasRun] = useState(false);

   const redirect = ( path )=>{
    window.location.href = path
   }

   const changueImage= ()=>{
    if( image === "/avatar.png" ){
      setImage("/moto4k.jpg") 
    }
    else{
      setImage("/avatar.png")
    }
   }


 
const showForm = () => {
  Swal.fire({
    html: `
      <textarea style="margin-top:100px" id="message" class="swal2-textarea" placeholder="Tu mensaje" rows="4"></textarea>
    `,
    confirmButtonText: 'Enviar',
    focusConfirm: false,
    preConfirm: () => {
      const message = document.getElementById('message').value;

      if ( !message) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return false;
      }

      // Podés devolver los datos para usarlos
      return { message };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { message } = result.value;
      sendEmail( message )
    }
  });
};

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
    "Martín Alonso",
    "name"
  );
  typeWriter(
    "<Full Stack Developer/>",
    "position"
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

  useEffect(() => {
    setTimeout(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Evita llamadas innecesarias
                }
            });
        });

        const elements = document.querySelectorAll(".hidden");
        elements.forEach(elemento => observer.observe(elemento));

        return () => observer.disconnect();
    }, 200);
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
     <button onClick={ showForm } className="button_contact">
      <p>Contactar</p>
      <img src="/brujula.png"></img>
     </button>
     <button onClick={ Me } className="button_about_me">
      <p>Sobre Mi</p>
      <img src="/totem.png"></img>
     </button>
    </div>
    <div className="data_cont" style={ { display: "flex" } }>
     <div>
      <img className="avatar" style={ {   transition: "transform 0.5s ease", filter: "brightness(80%)" } } src={ image } />
      <img onClick={ changueImage } style={ { transform: "translateX(-140px) translateY(-30px)", width: "30px" , height: "30px" } } src="/exit_icon.png"/>
     </div>
     <div className="info">
      <h1 className="name"></h1>
      <h2 className="position"></h2>
      <p className="details">Ofrezco mis conocimientos en programación y ciberseguridad para convertirme en un pilar importante de su equipo.</p>
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