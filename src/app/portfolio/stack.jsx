import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar , Autoplay } from "swiper/modules"; // Importar módulos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Stack(){

    return(
        <div className="stack">
         <div className="title">
          <img className="azada" src="/azada.png"></img>
          <h1>Stack</h1>
          <img src="/axe.png"></img>
         </div>
         <div className="chests_cont">
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
                          <img src="/js.png"></img>
                          <p>Javascript</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/html.png"></img>
                          <p>HTML</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/css.png"></img>
                          <p>CSS</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/express.png"></img>
                          <p>Express</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/mongo.png"></img>
                          <p>MongoDB</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/handlebars.png"></img>
                          <p>Handlebars</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/sass.png"></img>
                          <p>SASS</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/react.png"></img>
                          <p>React</p>
                         </SwiperSlide> 
                         <SwiperSlide>
                          <img src="/next.png"></img>
                          <p>NextJS</p>
                         </SwiperSlide> 
                      </Swiper>
         </div>
        </div>
    )
}