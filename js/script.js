const scriptURL = 'https://script.google.com/macros/s/AKfycbxl1-6DGBp8yYpwSmCTvvj78CszTGimPe-0NVjbLygtjrrpO8ll1GBjYtMfMnIDL-ib/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })

 function myFunction() {
          document.getElementById("myForm").reset();
        }