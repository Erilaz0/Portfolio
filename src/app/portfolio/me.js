import Swal from 'sweetalert2';  

const redirect = ()=>{
  window.location.href = "/me.png"
}

export default function Me(){
    Swal.fire({
      html: `
        <div style="display : flex; flex-direction: column; text-align:start;gap : 10px;">
         <div style="margin-left: 30px; margin-top:70px">
          <img id="profile-pic" width="200px" height:"200px" src="/me.png"/>
          <p>Edad: 23 Años</p>
          <p>D.I: 5.468.321-2</p>
          <p>Celular: +598 091910895</p>
          <p>País Origen: Uruguay</p>
          <p>Ingles: Intermedio</p>
          <p>Disponibilidad: Total</p>
          <p>Bachillerato: Completo</p>
         </div>
        </div>
      `,
    didOpen: () => {
      const img = document.getElementById('profile-pic');
      if (img) {
        img.addEventListener('click', redirect);
      }
    },
    confirmButtonText: 'Cerrar'
    });

}