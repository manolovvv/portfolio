const form = document.querySelector('.contact__form')
form.addEventListener('submit',(event)=>{
    const data = new FormData(form)
    const subject = document.querySelector('#formSubject').value
    const email = document.querySelector('#formEmail').value
    const message = document.querySelector('#formMessage').value

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log( this.responseText);
    }
  };
  xhttp.open("POST", "http://localhost:2666/", true);
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


