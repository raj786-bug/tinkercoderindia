const scriptURL = 'https://script.google.com/macros/s/AKfycbyG5v4qgtv7luaY4gsGsOKSGrrC4H2n8pFJvMmEVOboEDlcIjmbEDljNhpmDOm3bnIU/exec'
        const formss = document.forms['submit-to-google-sheet']
      
        formss.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(formss)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })

 function myFunction() {
          document.getElementById("myFormss").reset();
        }