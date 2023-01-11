

function sendEmail(event){
    let name = document.getElementById('c_name').value
    let email = document.getElementById('c_email').value
    let subject = document.getElementById('c_subject').value
    let cmessage = document.getElementById('c_message').value
    
event.preventDefault()
console.log(name,email,subject,cmessage)

Email.send({
    Host : "smtp.mailtrap.io",
    Username : "7635b8b0d2c877",
    Password : "5e4721a8b844c0",
    To : 'prathap.k27@gmail.com',
    From : "sender@example.com",
    Subject : `${subject}`,
    Body : `<html><h2>Mail from ${name}</h2><strong>${subject}</strong><br></br><em>${cmessage}</em></html>`
}).then(
  message => alert(message)
);

}

