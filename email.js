var nodemailer = require("nodemailer");


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: 'false',
    port: '25',
    auth: {
      user: 'info.insuladigitalstudio@gmail.com',
      pass: 'Insulapassword'
    },
    tls:{
      rejectUnauthorized: false
    }

  });

  let HelperOptions = {
    from: "'Insula Digital Studio' <info.insuladigitalstudio@gmail.com>",
    to: "'Insula Digital Studio' <info.insuladigitalstudio@gmail.com>",
    subject: "Test Email",
    text: "Wow it is working!"
  };

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error){
      return console.log(error);
    }
    console.log("The Message was send");
    console.log(info);
  });
