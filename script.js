function sendMail(){
    let parms = {
        name : document.getElementById("Name")
        email : document.getElementById("email")
        message: document.getElementById("message")
      }
emailjs.sendform("service_m1xpwk7","template_c76bisg",parms).then(alert("email sent!!"))

}