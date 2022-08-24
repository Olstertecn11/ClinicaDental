import emailjs from "emailjs-com";


const sendMsg = (message)=>{
  emailjs.sendForm('service_t3lm6cg', 'template_pi4jjid', message, 'a2DG14lDuzHz2Enzj')
    .then((result)=>{
      console.log(result.text);
    },
    (error)=>{
      console.log(error.text);
    });
}

export default sendMsg;
