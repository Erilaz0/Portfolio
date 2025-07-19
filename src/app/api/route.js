import nodemailer from "nodemailer"

export async function POST( req ){

    try {
        const { message } = await req.json();
    
        // Configura el transporte con tus credenciales SMTP (por ejemplo, Gmail, Mailtrap, etc.)
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER ,
            pass: process.env.EMAIL_PASS 
          },
          tls: {
            rejectUnauthorized: false
          }
        });
    
        // Configura el contenido del email
        const mailOptions = {
          from: process.env.EMAIL_USER ,
          to: process.env.EMAIL_USER,
          subject: "portfolio",
          text: message,
          html: `<p>${message}</p>`, // opcional
        };
    
        // Envía el email
        await transporter.sendMail(mailOptions);
    
        return Response.json({ success: true, message: "Correo enviado con éxito." });
    
      } catch (error) {
        return Response.json({ success: false, message: "Error al enviar correo." , error : error }, { status: 500 });
      }
}