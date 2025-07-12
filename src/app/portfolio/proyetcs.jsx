import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar , Autoplay } from "swiper/modules"; // Importar módulos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swal from 'sweetalert2';
import { useState } from "react";

export default function Proyects(){
    const [ imageS , setImageS ] = useState("")


     const showProyect = ( event )=>{
        let title;
        let description;
        if( event.target.id === "/moto4k.jpg" ){
           title = "DMstore ( Ecommerce )",
           description = "DMstore es una tienda de insumos mecanicos con opcion de pagos variada utilizando la libreria de mercado pago."
        }
        else if( event.target.id === "/pinka.png" ){
           title = "ToniaInv ( App de Eventos )"
           description = "App de organización de eventos, recopila la información de los invitados a través de delicadas invitaciones web."
        }
        else if( event.target.id === "/SiteStrike.png" ){
           title = "SiteStrike",
           description = "Herramienta en desarrollo que realiza ataques diccionario simples sobre una URL dada."
        }
        Swal.fire({
            html: `
            <div class="swal" style="overflow: hidden; padding:20px; display: flex; flex-direction: column; justify-content: flex-start">
             <img src=${ event.target.id } style="margin-top:70px; margin-left: 30px ;width: 200px; height: 150px" />
             <h1 style="text-align: start; font-size: 15px;margin-left: 30px ; margin-top: 10px">${ title }</h1> 
             <p style="width: 90%;margin-left:30px;font-size: 15px; text-align: start">${ description }</p>
             <div style="display: flex; margin-top: 5px;">
              <div style="margin-left: 20px; width: 80px; display: flex; aling-items: center; justify-content: center; flex-direction: column;">
               <img class="icon_book" style="width:40px; height: 40px; margin-left: 20px" src="/cat.png"/>   
               <p style="margin-top: 5px; text-align: center;font-size:15px">Github</p>
              </div>    
              <div style="margin-left: 5px; width: 80px; display: flex; aling-items: center; justify-content: center; flex-direction: column;">
               <img style="width:40px; height: 40px; margin-left: 20px" src="/ender_eye.png"/>   
               <p style="margin-top: 5px; text-align: center;font-size:15px">Sitio</p>
              </div>  
             </div>  
            </div>
          `
          })
     }

    return(
        <div className="proyects">
         <div className="title">
          <h1>Proyectos</h1>
          <img src="/craft.png"></img>
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
            <img id="/moto4k.jpg" onClick={ showProyect } src="/book.gif"></img>
            <p>DMstore</p>
           </SwiperSlide> 
           <SwiperSlide>
            <img id="/pinka.png" onClick={ showProyect } src="/book.gif"></img>
            <p>Tonia Inv</p>
           </SwiperSlide> 
           <SwiperSlide>
            <img id="/SiteStrike.png"  onClick={ showProyect } src="/book.gif" ></img>
            <p>SiteStrike</p>
           </SwiperSlide> 
          </Swiper>
         </div>
        </div>
    )
}