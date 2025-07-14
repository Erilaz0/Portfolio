import Swal from 'sweetalert2';  

export default function Me(){
    Swal.fire({
      html: `
        <div style="display : flex; flex-direction: column; text-align:start;gap : 10px;">
         <div style="margin-left: 30px; margin-top:70px">
          <img width="200px" height:"200px" src="/user_icon.png"/>
          <p>Edad: 23 Años</p>
          <p>D.I: 5.468.321-2</p>
          <p>Celular: +598 091910895</p>
          <p>País Origen: Uruguay</p>
          <p>Disponibilidad: Total</p>
         </div>
        </div>
      `,
      confirmButtonText: 'Cerrar'
    });

}