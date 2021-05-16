const form = document.querySelector('.contact__form')
form.addEventListener('submit',(event)=>{
  event.preventDefault()
    const data = new FormData(form)
    const subject = document.querySelector('#formSubject').value
    const email = document.querySelector('#formEmail').value
    const message = document.querySelector('#formMessage').value

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      location.reload()
      console.log( this.responseText);
    }
  };
  xhttp.open("POST", "https://send-email-manolovvv.herokuapp.com/", true);
  xhttp.setRequestHeader('Content-Type','application/json')
  xhttp.send(
      JSON.stringify(
          {
              subject: subject,
              email: email,
              message: message
          }
      )
  );
})


