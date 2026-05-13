  import {Resend} from 'resend'
  
  const resend = new Resend(process.env.RESEND_API);


  function sendEmail(reciever, subject, body, name){
      resend.emails.send({
          from: 'halfbloodhero1027@gmail.com',
          to: reciever,
          subject: subject,
          html: `<h1>Hi, ${name}!</h1> <p>${body}</p>`
        });
    }

export default sendEmail