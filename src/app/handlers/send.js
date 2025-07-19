"use client"
import Swal from 'sweetalert2'

export default async function sendEmail( message ){
    const msg = {
        message : message
    }
    const request = await fetch("https://macv.vercel.app/api",{
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify( msg )
    })
    const response = await request.json()
    if( response.success === false ){
        Swal.fire({
            html:"<p style='margin-top:100px'>Email no enviado</p>",
          })
    }
    else if ( response.success === true ){
        Swal.fire({
            html:"<p style='margin-top:100px'>Email Enviado correctamente a alonsoalonsl431432@gmail.com</p>",
          })
    }
    else{
        Swal.fire({
            title: 'Email no enviado',
            icon: 'warning',
          })
    }
}