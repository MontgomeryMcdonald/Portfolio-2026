  import {Resend} from 'resend'
  
  const resend = new Resend(process.env.RESEND_API);


  function sendEmail(reciever, subject, body){
      resend.emails.send({
          from: 'halfbloodhero1027@gmail.com',
          to: reciever,
          subject: subject,
          html: body
        });
    }

export default sendEmail