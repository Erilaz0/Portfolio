import Swal from 'sweetalert2';  
const showDetails = ()=>{
    Swal.fire({
      html: `
        <div style="display : flex; flex-direction: column; text-align:start;gap : 10px;">
         <h3 style="margin-top: 100px; margin-left:30px" >Certificaciones</h1>
         <p style="margin-left:30px">Click para Descargar</p>
         <a style="margin-left:30px ; text-decoration : none;" href="/backendc.png" download="backendc.png">Backend</a>
         <a style="margin-left:30px ;text-decoration : none;" href="/jsc.png" download="jsc.png">Javascript</a>
         <a style="margin-left:30px ;text-decoration : none;" href="/reactc.png" download="reactc.png">React</a>
         <a style="margin-left:30px ;text-decoration : none;" href="/webc.png" download="webc.png">Desarrollo Web</a>
         <a style="margin-left:30px ;text-decoration : none;" href="/ciberc.png" download="ciberc.png">Ciberseguridad</a>
        </div>
      `,
      confirmButtonText: 'Cerrar'
    });
  }
  export default showDetails