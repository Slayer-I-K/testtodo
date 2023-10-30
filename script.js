let api = "https://script.google.com/macros/s/AKfycbzDWvZCyIlSkxonNlNGWa_JdLGOW-1i947UxB-e3i1XL-T2w3KtUK8CMYdXDGH8jlGMXw/exec";
    let form = document.querySelector("form");
    let add = document.querySelector(".add");
    function addData() {
        add.textContent="getting"
        let obj = {
                       todo:form[0,1].value
        }
        fetch(api,{
            method:"POST",
            body:JSON.stringify(obj)
        })
         .then(res=> res.text())
         .then(data => {
             alert(data)
             add.textContent="Get"
          form.reset();
         });
    }
    
