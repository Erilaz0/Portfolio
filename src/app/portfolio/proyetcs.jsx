import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar , Autoplay } from "swiper/modules"; // Importar módulos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";

export default function Proyects(){
    const [ imageS , setImageS ] = useState("")
    
    const redirect = ( path )=>{
        window.location.href = path
       }

     const showProyect = ( event )=>{
        let title;
        let description;
        let githubf;
        let githubb;
        let site;
        if( event.target.id === "/moto4k.jpg" ){
           title = "DMstore ( Ecommerce )",
           description = "DMstore es una tienda de insumos mecanicos con opcion de pagos variada utilizando la libreria de mercado pago."
           githubf = "https://github.com/Erilaz0/dm_front.git"
           githubb = "https://github.com/Erilaz0/dm_src.git"
           site = "https://dmotos.netlify.app/"
        }
        else if( event.target.id === "/pinka.png" ){
           title = "ToniaInv ( App de Eventos )"
           description = "App de organización de eventos, recopila la información de los invitados a través de delicadas invitaciones web."
           githubf = "https://github.com/Erilaz0/tonia_inv.git"
           githubb = "https://github.com/Erilaz0/tonia_inv.git"
           site = "https://tonia.netlify.app/"
        }
        else if( event.target.id === "/SiteStrike.png" ){
           title = "SiteStrike",
           description = "Herramienta en desarrollo que realiza ataques diccionario simples sobre una URL dada."
           githubf = "https://github.com/Erilaz0/SiteStrike.git"
           githubb = "https://github.com/Erilaz0/SiteStrike.git"
           site = "https://github.com/Erilaz0/SiteStrike.git"
        }
        Swal.fire({
            html: `
          <div class="swal" style="overflow: hidden; padding:20px; display: flex; flex-direction: column; justify-content: flex-start">
           <div style="min-height: 400px; display: flex; flex-direction: column; justify-content: flex-start"">
            <img src=${ event.target.id } style="margin-top:70px; margin-left: 30px ;width: 200px; height: 150px" />
             <h1 style="text-align: start; font-size: 15px;margin-left: 30px ; margin-top: 10px">${ title }</h1> 
             <p style="width: 90%;margin-left:30px;font-size: 15px; text-align: start">${ description }</p>
             <div style="display: flex; margin-top: 15px;">
              <div style="margin-left: 20px; max-width: 80px; display: flex; aling-items: center; justify-content: center; flex-direction: column;">
               <img class="cat" class="icon_book" style="min-width:40px; width:40px; height: 40px" src="/cat.png"/>   
               <p style="margin-top: 5px; text-align: center;font-size:15px">Front</p>
              </div>  
              <div style="margin-left: 20px; max-width: 80px; display: flex; aling-items: center; justify-content: center; flex-direction: column;">
               <img class="cato" class="icon_book" style="min-width:40px; height: 40px" src="/cat_back.png"/>   
               <p style="margin-top: 5px; text-aling: center;font-size:15px">Back</p>
              </div>     
              <div style="margin-left:20px;min-width:40px; max-width: 80px; display: flex; aling-items: center; justify-content: center; flex-direction: column;">
               <img class="site" style="width:40px; height: 40px;" src="/ender_eye.png"/>   
               <p style="margin-top: 5px; text-align: center;font-size:15px">Sitio</p>
              </div>  
             </div>  
            </div>
           </div>
          `
          ,
        showConfirmButton: true,
        didOpen: () => {
         const githubBtn = document.getElementsByClassName("cat")[0];
         const githubBtnb = document.getElementsByClassName("cato")[0];
         const siteBtn = document.getElementsByClassName("site")[0];

         if (githubBtn ) {
          githubBtn.addEventListener("click", () => {
             window.open( githubf , "_blank") 
         });
        }

        if (githubBtnb ) {
            githubBtnb.addEventListener("click", () => {
             window.open( githubb , "_blank") 
           });
          }

        if (siteBtn) {
         siteBtn.addEventListener("click", () => {
          window.open(site, "_blank");
         });
        }
       }
          })
     }

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

         const DM = "<div style='margin-left: 30px;display:flex; flex-direction: column; margin-top: 60px; align-items: flex-start;'><p> Javascript </p><p>CSS</p><p>HTML</p><p>TypeScript</p><p>MongoDB</p><p>sass</p><p>Reactjs</p></div>"
         const Tonia = "<div style='margin-left: 30px;display:flex; flex-direction: column; margin-top: 60px; align-items: flex-start;'><p> Javascript </p><p>CSS</p><p>HTML</p><p>NEXTJS</p><p>MongoDB</p><p>sass</p><p>Reactjs</p></div>"
         const SS = "<div style='margin-left: 30px;display:flex; flex-direction: column; margin-top: 60px; align-items: flex-start;'><p> Javascript </p></div>"

         const DMSWAL = ()=>{
            Swal.fire({
                html: `
                 ${ DM }
                `
              });
         }

         const TONIASWAL = ()=>{
            Swal.fire({
                html: `
                 ${ Tonia }
                `
              });
         }

         const SSSWAL = ()=>{
            Swal.fire({
                html: `
                 ${ SS }
                `
              });
         }

    return(
        <div className="proyects">
         <div className="title">
          <h1 className="hidden">Proyectos</h1>
          <img className="hidden" src="/craft.png"></img>
         </div>
         <div className="proyects_cont">
         <Swiper
          modules={[Navigation, Pagination, Scrollbar , Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={ true }
          autoplay={{
          delay: 2000, // Tiempo en milisegundos entre cada cambio de slide (3 segundos)
          disableOnInteraction: false, // Permite que siga moviéndose después de la interacción
          }}
          >
           <SwiperSlide>
            <img className="hidden" id="/moto4k.jpg" onClick={ showProyect } src="/book.gif"></img>
            <p>DMstore</p>
            <p onClick={ DMSWAL } className="p2">Tecnologias</p>
           </SwiperSlide> 
           <SwiperSlide>
            <img className="hidden" id="/pinka.png" onClick={ showProyect } src="/book.gif"></img>
            <p>Tonia Inv</p>
            <p onClick={ TONIASWAL} className="p2">Tecnologias</p>
           </SwiperSlide> 
           <SwiperSlide>
            <img className="hidden" id="/SiteStrike.png"  onClick={ showProyect } src="/book.gif" ></img>
            <p>SiteStrike</p>
            <p onClick={ SSSWAL } className="p2">Tecnologias</p>
           </SwiperSlide> 
          </Swiper>
         </div>
        </div>
    )
}